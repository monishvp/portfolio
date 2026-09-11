import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-black hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:-translate-y-0.5",
        outline:
          "border border-[#00d4ff] text-[#00d4ff] bg-transparent hover:bg-[#00d4ff]/10 hover:-translate-y-0.5",
        secondary:
          "bg-white/10 text-white hover:bg-white/15 hover:-translate-y-0.5",
        ghost:
          "text-gray-300 hover:text-[#00d4ff] hover:bg-white/5",
        icon:
          "rounded-full border border-white/15 text-gray-300 hover:text-[#00d4ff] hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-7 py-2.5",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
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

