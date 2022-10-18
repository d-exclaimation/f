# F

Functional programming pipe pattern for TypeScript / JavaScript.

## Setup

```sh
npm i @d-exclaimation/f
```


## Usage

### Pipe functions in sequence

```typescript
import { f, F } from '@d-exclaimation/f'

// Instead of 

const res = func5(func4(func3(func2(func1(-111)))));

// Pipe the return value of a function to another

const res = F.x(-111)
  .f(func1) 
  .f(func2)
  .f(func3)
  .f(func4)
  .f(func5)
  .x();
```

### Pipe predicate 

```typescript
const res = F.x(10)
  .p(isPositive);

console.log(res); // true
```

### Pipe void / non-returning function 

```typescript
F.x(10)
  .z(console.log); // 10
```

### Pipe async functions using higher order functions

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

### Combine pipe

```typescript
const res = F.x("Hello")
  .u(F.x("World"))
  .y();

console.log(res); // ["Hello", "World"]
```

## Feedback
If you have any feedback, feel free reach out at twitter [@d_exclaimation](https://www.twitter.com/d_exclaimation) or email at [thisoneis4business@gmail.com](thisoneis4business@gmail.com)/