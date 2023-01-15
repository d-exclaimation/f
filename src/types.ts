//
//  types.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

/**
 * Represents a function that takes 1 input and return 1 output
 *
 * @template In Input type
 * @template Out Output type
 */
export type UnaryFunc<In, Out> = Func<[In], Out>;

/**
 * Represents a function that takes n-ary inputs and return 1 output
 *
 * @template Ins Input types
 * @template Out Output type
 */
export type Func<Ins extends any[], Out> = (...inputs: Ins) => Out;

/**
 * Any type that represents a function that can take 0-n inputs and return any output
 */
export type FuncLike = Func<any[], any>;

/**
 * Head argument / parameter / input for a function
 */
export type HeadIn<T extends FuncLike> = Parameters<T> extends [infer F, ...any]
  ? F
  : Parameters<T>[0];

/**
 * Tail (every except head) arguments / parameters / inputs for a function
 */
export type TailIns<T extends FuncLike> = Parameters<T> extends [
  any,
  ...infer R
]
  ? R
  : Parameters<T>;

/**
 * Represents a function that takes 1 input and return 1 output, that can used within a pipe
 *
 * @template In Input type
 * @template Out Output type
 */
export type PipeableFunc<In, Out> = UnaryFunc<In, Out>;
