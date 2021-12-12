import React, { FC } from "react";

const Foo = function foo() {
  return <p>Foo</p>;
};
const Component: FC = function Component() {
  return <Foo />;
};

interface Props {
  name: string;
  age: number;
}
const ComponentWithProps: FC<Props> = function ComponentWithProps({
  name,
  age,
}) {
  return (
    <p>
      {name}, {age}
    </p>
  );
};

const ComponentWithHooks: FC = function ComponentWithHooks() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const n = count + 1;
    setCount(n);
  }, [count]);
  return (
    <button type="button" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default {
  Component,
  ComponentWithProps,
  ComponentWithHooks,
};
