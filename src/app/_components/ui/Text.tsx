import { cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

export const TextVariants = cva("", {
  variants: {
    varients: {
      default: "text-skin-primaryColor",
      secondary: "text-skin-secondaryColor",
    },
    textSize: {
      sm: "text-sm",
      paragraph: "",
      heading: "text-xl",
      timer: "text-6xl font-robotoMono font-semibold tracking-wider",
      scramble: "text-2xl tracking-wider text-center",
    },
  },
  defaultVariants: {
    varients: "default",
    textSize: "paragraph",
  },
});
type TextVariants = typeof TextVariants;

interface IProps {
  children: React.ReactNode;
  className?: string;
  textSize?: "paragraph" | "heading" | "timer" | "scramble";
  varient?: "default" | "secondary";
}

export const Text = ({ children, className, textSize, varient }: IProps) => {
  return (
    <div>
      {textSize === "heading" ? (
        <h1
          className={cn(
            TextVariants({ varients: varient, textSize, className }),
          )}
        >
          {children}
        </h1>
      ) : textSize === "scramble" ? (
        <h1
          className={cn(
            TextVariants({ varients: varient, textSize, className }),
          )}
        >
          {children}
        </h1>
      ) : textSize === "timer" ? (
        <h1
          className={cn(
            TextVariants({ varients: varient, textSize, className }),
          )}
        >
          {children}
        </h1>
      ) : (
        <p
          className={cn(
            TextVariants({ varients: varient, textSize, className }),
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
};
