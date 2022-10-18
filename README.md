# F

Functional programming pipe pattern for TypeScript / JavaScript.

## Setup

### Install
```sh
npm i @d-exclaimation/f
```

### Import
```typescript
import { F } from '@d-exclaimation/f'
```

## Guide

### Cascade functions in sequence

Instead of nesting one function with another which are hard to read

```typescript

const res = func5(func4(func3(func2(func1(-111)))));

```

Cascade the return value of a function to another

```typescript

const res = F.x(-111)
  .f(func1) 
  .f(func2)
  .f(func3)
  .f(func4)
  .f(func5)
  .x();
```

### Cascade predicate 

A predicate can be cascaded to immediately return the boolean result

```typescript
const res = F.x(10)
  .p(isPositive);

console.log(res); // true
```

### Cascade void / non-returning function 

A non-returning function can be cascaded at the end as callback instead of manually retreiving the value

```typescript
F.x(10)
  .z(console.log); // 10
```

### Cascade async functions using higher order functions

Asynchrounous function can also be cascaded to allow better handling of `Promises`

```typescript
const res = F.x(new Promise<number>(r => r(10)))
  .a(func1)
  .a(func2)
  .a(func3)
  .a(func4)
  .a(func5)
  .y();

const res1 = await res;
```

### Combine cascading

`F`'s can be combined into another with the union value of both 

```typescript
const res = F.x("Hello")
  .u(F.x("World"))
  .y();

console.log(res); // ["Hello", "World"]
```

## Feedback
If you have any feedback, feel free reach out at twitter [@d_exclaimation](https://www.twitter.com/d_exclaimation) or email at [thisoneis4business@gmail.com](thisoneis4business@gmail.com).