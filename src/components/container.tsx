import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <main className="max-w-375 mx-auto h-full">{children}</main>;
};
