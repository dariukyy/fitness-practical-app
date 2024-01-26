import { type ReactNode } from "react";

type HTextProps = {
  children: ReactNode;
};

function HText({ children }: HTextProps) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
}

export default HText;
