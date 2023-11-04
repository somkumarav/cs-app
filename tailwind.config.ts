import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// function withOpacity(variableName: string): string {
//   return ({ opacityValue }: { opacityValue: number | undefined }): string => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        barlow: "var(--barlow)",
        robotoMono: "var(--roboto-mono)",
        monoton: "var(--monoton)",
      },
      textColor: {
        skin: {
          primaryColor: "var(--primary-color)",
          secondaryColor: "var(--secondary-color)",
          accentColor: "var(--accent-color)",
        },
      },
      backgroundColor: {
        skin: {
          primaryBg: "var(--primary-background-color)",
          secondaryBg: "var(--secondary-background-color)",
          accentBg: "var(--accent-color)",
          // fill: withOpacity("--primary-background-color") as unknown as string,
          // 'button-accent': withOpacity('--color-button-accent'),
          // 'button-accent-hover': withOpacity('--color-button-accent-hover'),
          // 'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          // hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
