//
//  optional.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { Func, PipeableFunc, UnaryFunc } from "./types";

export type Optional<T> = T | null | undefined;

export namespace Opt {
  // MARK: - Instance functions

  export function isNil<T>(opt: Optional<T>): opt is null | undefined {
    return opt === null || opt === undefined;
  }

  export function each<T>(
    func: UnaryFunc<T, void>
  ): PipeableFunc<Optional<T>, void> {
    return (opt) => !isNil(opt) && func(opt);
  }

  export function tap<T>(
    func: UnaryFunc<T, void>
  ): PipeableFunc<Optional<T>, Optional<T>> {
    return (opt) => {
      if (!isNil(opt)) func(opt);
      return opt;
    };
  }

  export function map<T, K>(
    func: UnaryFunc<T, K>
  ): PipeableFunc<Optional<T>, Optional<K>> {
    return (opt) => {
      if (isNil(opt)) return opt;
      return func(opt);
    };
  }

  export function filter<T>(
    predicate: UnaryFunc<T, boolean>
  ): PipeableFunc<Optional<T>, Optional<T>> {
    return (opt) => {
      if (isNil(opt)) return opt;
      return predicate(opt) ? opt : undefined;
    };
  }

  export function match<T, K>(callback: {
    some: UnaryFunc<T, K>;
    none: Func<[], K>;
  }): PipeableFunc<Optional<T>, K> {
    return (opt) => {
      if (isNil(opt)) return callback.none();
      return callback.some(opt);
    };
  }

  // MARK: - Static functions

  export function some<T>(value: T): Optional<T> {
    return value;
  }

  export function none<T = never>(): Optional<T> {
    return undefined;
  }
}
