import React, { FC } from "react";

const Foo = () => <p>Foo</p>;
const Component = () => <Foo />;

interface Props {
  name: string;
  age: number;
}
const ComponentWithProps: FC<Props> = ({ name, age }) => (
  <p>
    {name}, {age}
  </p>
);

export default {
  Component,
  ComponentWithProps
};
