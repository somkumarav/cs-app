import { type VariantProps, cva } from "class-variance-authority";
import { type InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

export const InputVariants = cva("rounded-md px-2 outline-none opacity-95", {
  variants: {
    varients: {
      default:
        "bg-skin-secondaryBg placeholder:text-skin-primaryColor text-skin-secondaryColor",
      secondary:
        "bg-skin-primary placeholder:text-skin-basecolor text-skin-secondarycolor ",
    },
    inputSize: {
      default: "min-h-[40px] min-w-[300px]",
    },
  },
  defaultVariants: {
    varients: "default",
    inputSize: "default",
  },
});
type InputVariants = typeof InputVariants;

interface IProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<InputVariants> {
  name: string;
  placeholder?: string;
  className?: string;
  InputSize?: "sm" | "md" | "lg";
  varient?: "default" | "secondary";
}

export const Input = ({
  name,
  placeholder,
  className,
  inputSize,
  varient,
  ...props
}: IProps) => {
  return (
    <input
      {...props}
      name={name}
      type="text"
      className={cn(InputVariants({ varients: varient, inputSize, className }))}
      placeholder={placeholder ? placeholder : name}
    />
  );
};
