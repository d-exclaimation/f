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

const res = f(-111)
  .f(func1) 
  .f(func2)
  .f(func3)
  .f(func4)
  .f(func5)
  .x();

// or

const res = F.new(-111)
  .next(func1)
  .next(func2)
  .next(func3)
  .next(func4)
  .next(func5)
  .end();
```

### Pipe predicate 

```typescript
const res = f(10)
  .p(isPositive);

// or

const res = F.new(10)
  .is(isPositive);

console.log(res); // true
```

### Pipe async functions using higher order functions

```typescript
const res = f(new Promise<number>(r => r(10)))
  .f(f.a(func1))
  .f(f.a(func2))
  .f(f.a(func3))
  .f(f.a(func4))
  .f(f.a(func5))
  .end();

// or 

const res = F.new(new Promise<number>(r => r(10)))
  .next(F.async(func1))
  .next(F.async(func2))
  .next(F.async(func3))
  .next(F.async(func4))
  .next(F.async(func5))
  .end();


const res1 = await res;
```