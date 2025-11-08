import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BentoPara = ({ children, className }: Props) => {
  return (
    <p
      className={cn("text-neutral-800 text-sm my-4 mx-auto w-[65%]", className)}
    >
      {children}
    </p>
  );
};
