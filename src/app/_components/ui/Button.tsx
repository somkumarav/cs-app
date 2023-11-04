import { type VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

export const ButtonVariants = cva("rounded-md px-2 outline-none opacity-95", {
  variants: {
    varients: {
      default:
        "bg-skin-secondaryBg placeholder:text-skin-primaryColor text-skin-secondaryColor",
      secondary:
        "bg-skin-primary placeholder:text-skin-basecolor text-skin-secondarycolor ",
    },
    inputSize: {
      default: "min-h-[40px] min-w-[300px]",
      sm: "min-h-[30px] min-w-[200px]",
      md: "min-h-[40px] min-w-[300px]",
      lg: "min-h-[50px] min-w-[400px]",
    },
  },
  defaultVariants: {
    varients: "default",
    inputSize: "default",
  },
});
type ButtonVariants = typeof ButtonVariants;

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<ButtonVariants> {
  children: React.ReactNode;
  className?: string;
  inputSize?: "sm" | "md" | "lg";
  varient?: "default" | "secondary";
}

export const Button = ({
  children,
  className,
  inputSize,
  varient,
  ...props
}: IProps) => {
  return (
    <button
      {...props}
      className={cn(
        ButtonVariants({ varients: varient, inputSize, className }),
      )}
    >
      {children}
    </button>
  );
};
