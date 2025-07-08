import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <span className="text-xl font-bold text-foreground">
        Ibu Roban<span className="text-primary"> Cerdas</span>
      </span>
    </Link>
  );
}
