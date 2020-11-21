import { Person, SampleData } from "./sampleTypes";

function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);

function greeter(person: Person) {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeter({ name: "toshi-toma", age: 24 });

function greeterWithEnum(person: SampleData) {
  return `My name is ${person.name}. I am ${person.age} years old.`;
}

greeterWithEnum({ name: SampleData.name, age: SampleData.age });
