import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const solvesRouter = createTRPCRouter({
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
            userId: session.user.id,
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

  getLast5Solves: protectedProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.solves.findMany({
      take: 5,
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });
    return data;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
