import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-white/20",
  {
    variants: {
      variant: {
        default:
          "border-[#00d4ff]/20 bg-[#00d4ff]/10 text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff]",
        secondary:
          "border-[#7c3aed]/20 bg-[#7c3aed]/10 text-[#7c3aed]",
        outline:
          "border-white/20 text-gray-300",
        cyan:
          "border-[#00d4ff]/30 bg-[#00d4ff]/10 text-[#00d4ff]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

