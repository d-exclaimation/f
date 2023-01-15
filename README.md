# F

Functional programming utilities for TypeScript / JavaScript.

## Setup

### Install
```sh
npm i @d-exclaimation/f
```

## Usage

### Pipe value, to multiple functions

```ts
import { pipe, f } from "@d-exclaimation/f";

const addOne = (num: number) => num + 1;
const doubled = (num: number) => num * 2;

const res0 = pipe(
  10, 
  addOne, // 11
  doubled // 22
)

console.log(res0) // [LOG]: 22
```

### Non-higher order function compatibility

```ts
import { pipe, f } from "@d-exclaimation/f";

const add = (num: number, other: number) => num + other;
const apply = (num: number, opts: { adding: number, subtracting: number }) => num + opts.adding - opts.subtracting;

const res1 = pipe(
  10,
  f(add, 2), // 12 (equivalent to `add(10, 2)`)
  f(add, 10), // 22
  f(apply, { adding: 10, subtracting: 9 }) // 23
)

console.log(res1) // [LOG]: 23
```

### Built-in modules

#### Array / enumerable 

```ts
import { pipe, f, Enum } from "@d-exclaimation/f";

const res2 = pipe(
  Enum.range(1, 10), // [1, 2, 3, ..., 10]
  Enum.enumerated, // [[1, 0], [2, 1], [3, 2], ..., [10, 9]]
  Enum.map(([value, i]) => value * i), // [0, 2, 6, ..., 90]
  Enum.filter(x => x > 0), // [2, 6, 12, ..., 90]
  Enum.reduce(0, (acc, x) => acc + x) // 330
);

console.log(res2) // [LOG]: 330
```

#### Optional

```ts
import { pipe, f, Opt } from "@d-exclaimation/f";

const res3 = pipe(
  Opt.some(1), // 1
  Opt.map((value) => value * 2) // 2
  Opt.filter((value) => value >= 5) // null / undefined
  Opt.match({ 
    some: (value) => value + 1,
    none: () => 5 
  }) // 5
);

console.log(res3) // [LOG]: 5
```

## Feedback
If you have any feedback, feel free reach out at twitter [@d_exclaimation](https://www.twitter.com/d_exclaimation) or email at [thisoneis4business@gmail.com](thisoneis4business@gmail.com).