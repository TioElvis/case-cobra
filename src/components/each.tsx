import { Children } from "react";

interface Props<TData> {
  of: Array<TData>;
  render: (item: TData, index: number) => React.ReactNode;
}

export function Each<TData>({ of, render }: Props<TData>) {
  return Children.toArray(of.map((item, index) => render(item, index)));
}
