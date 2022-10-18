# F

Functional programming pipe pattern for TypeScript / JavaScript.

## Setup

```sh
npm i @d-exclaimation/f
```


## Usage/Examples

```typescript
import { f } from '@d-exclaimation/f'

const abs = (num: number): number 
  => Math.abs(num);

const clamp = (num: number): number 
  => Math.min(Math.max(0, num), 10);

const convert = (num: number): string 
  => `Converted to ${num}`;

// Pipe the return value of a function to another

const res = f(-111)
  .f(abs);
  .f(clamp);
  .f(convert)
  .x();

// or

const res = F.new(-111)
  .next(abs);
  .next(clamp);
  .next(convert)
  .end();

console.log(res);
// Converted to 10
```

