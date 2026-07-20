import Image from "next/image"
import { cn } from "@/lib/utils"

export function CacsLogo({ className, showCheckmark = true }: { className?: string; showCheckmark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showCheckmark && (
        <Image
          src="/cacs-checkmark.png"
          alt="CACS checkmark logo"
          width={44}
          height={44}
          className="h-10 w-10 shrink-0 md:h-11 md:w-11"
          priority
        />
      )}
      <div className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-semibold tracking-tight text-brand">CACS</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-terracotta">
          commerce advisory &amp; consulting solutions
        </span>
      </div>
    </div>
  )
}
