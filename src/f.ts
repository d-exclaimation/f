//
//  f.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { FuncLike, HeadIn, PipeableFunc, TailIns } from "./types";

/**
 * Create a function that allow the head argument / input to be injected given the tailing arguments / inputs
 * @param func Function to be converted into a higher order function
 * @param args All tailing arguments / inputs
 * @returns A pipeable function that take the head argument / input of the orignal function
 */
export function f<T extends FuncLike>(
  func: T,
  ...args: TailIns<T>
): PipeableFunc<HeadIn<T>, ReturnType<T>> {
  return (value) => func(value, ...args);
}
