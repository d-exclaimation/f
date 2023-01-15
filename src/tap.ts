//
//  tap.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { PipeableFunc, UnaryFunc } from "./types";

/**
 * Pipeable function that perform a side effect and return the original value
 * @param func Side effect
 * @returns A pipeable unary function
 */
export function tap<T>(func: UnaryFunc<T, void>): PipeableFunc<T, T> {
  return (value) => {
    func(value);
    return value;
  };
}
