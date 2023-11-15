import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const solvesRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        puzzle: z.string().min(1),
        scramble: z.array(z.string().min(1)),
        time: z.number().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const { session, db } = ctx;
        const { puzzle, scramble, time } = input;

        const solve = await db.solves.create({
          data: {
            userId: session?.user.id,
            puzzle,
            scramble,
            time,
          },
        });

        return solve;
      } catch (error) {
        console.log(error);
        return error;
      }
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
