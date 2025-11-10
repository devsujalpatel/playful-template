import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SectionPara = ({ children, className }: Props) => {
  return (
    <p className={cn("text-lg text-neutral-700 text-center w-184", className)}>
      {children}
    </p>
  );
};
