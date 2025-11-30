import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Logo = ({ classname }: { classname?: string}) => {
  return(
    <Link href="/" className={cn("flex items-center gap-1")}>
      <span className="text-md text-neutral-600">Agenforce</span>
    </Link>
  )
}