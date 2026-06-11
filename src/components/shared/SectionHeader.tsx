import { cn } from "@/lib/utils";
import MotionWrapper from "@/components/animations/MotionWrapper";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <MotionWrapper>
      <div
        className={cn(
          "mb-10 max-w-3xl",
          centered && "mx-auto text-center",
          className
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-green-700">
            {eyebrow}
          </p>
        )}

        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </MotionWrapper>
  );
}