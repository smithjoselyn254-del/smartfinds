import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
};

export function Section({ children }: Props) {
  return <section className="py-20"><Container>{children}</Container></section>;
}
