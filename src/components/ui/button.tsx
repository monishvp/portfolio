import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-white text-[#070707] hover:bg-[#F16B0D] hover:text-white rounded-full hover:shadow-[0_0_30px_rgba(241,107,13,0.35)] hover:-translate-y-0.5",
        flame:
          "bg-gradient-to-r from-[#F16B0D] to-[#E61416] text-white rounded-full hover:shadow-[0_0_35px_rgba(241,107,13,0.5)] hover:-translate-y-0.5",
        outline:
          "border border-white/20 text-white bg-transparent hover:border-[#F16B0D] hover:bg-white/5 rounded-full hover:-translate-y-0.5",
        secondary:
          "bg-white/10 text-white hover:bg-white/15 rounded-full hover:-translate-y-0.5",
        ghost:
          "text-gray-300 hover:text-white hover:bg-white/5 rounded-full",
        icon:
          "rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-[#F16B0D] hover:bg-[#F16B0D]/10 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
