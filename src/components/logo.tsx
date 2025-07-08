import { Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Stethoscope className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold text-foreground">
        SehatAI<span className="text-primary"> Keluarga</span>
      </span>
    </Link>
  );
}
