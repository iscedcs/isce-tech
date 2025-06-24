// components/AnimatedCard.tsx
"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";


type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">;

export default function AnimatedCard({className, children, ...motionProps }: AnimatedCardProps) {
  return (
    <motion.div
    className={cn("rounded-lg", className)}
    {...motionProps}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
