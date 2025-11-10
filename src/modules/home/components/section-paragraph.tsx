interface Props {
  children: React.ReactNode;
  className?: string;
}

export const SectionPara = ({ children, className }: Props) => {
  return (
    <p className="text-lg text-neutral-700 text-center w-184">{children}</p>
  );
};
