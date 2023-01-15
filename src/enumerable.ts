//
//  enum.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { UnaryFunc } from "./types";

export namespace Enum {
  // MARK: - Instance functions

  export function each<T>(func: UnaryFunc<T, void>): UnaryFunc<T[], void> {
    return (arr) => arr.forEach((x) => func(x));
  }

  export function tap<T>(func: UnaryFunc<T, void>): UnaryFunc<T[], T[]> {
    return (arr) => {
      arr.forEach((x) => func(x));
      return arr;
    };
  }

  export function map<T, K>(func: UnaryFunc<T, K>): UnaryFunc<T[], K[]> {
    return (arr) => arr.map((x) => func(x));
  }

  export function filter<T>(
    predicate: UnaryFunc<T, boolean>
  ): UnaryFunc<T[], T[]> {
    return (arr) => arr.filter((x) => predicate(x));
  }

  export function at<T>(idx: number): UnaryFunc<T[], T | null> {
    return (arr) => arr[idx < 0 ? arr.length + idx : idx] ?? null;
  }

  export function count<T>(
    predicate: UnaryFunc<T, boolean> = () => true
  ): UnaryFunc<T[], number> {
    return (arr) => arr.filter((x) => predicate(x)).length;
  }

  export function reduce<T, K>(
    initial: K,
    func: (acc: K, curr: T) => K
  ): UnaryFunc<T[], K> {
    return (arr) => arr.reduce((acc, x) => func(acc, x), initial);
  }

  export function flatMap<T, K>(func: UnaryFunc<T, K[]>): UnaryFunc<T[], K[]> {
    return (arr) => arr.flatMap((x) => func(x));
  }

  export function flatten<T>(arr: T[][]): T[] {
    return flatMap<T[], T>((value) => value)(arr);
  }

  export function indices<T>(arr: T[]): number[] {
    return arr.map((_, i) => i);
  }

  export function enumerated<T>(arr: T[]): [value: T, i: number][] {
    return arr.map((value, i) => [value, i]);
  }

  // MARK: - Static functions

  export function fill<T>(count: number, func: UnaryFunc<number, T>): T[] {
    return new Array<null>(count).fill(null).map((_, i) => func(i));
  }

  export function range(start: number, end: number): number[] {
    return fill(end - start + 1, (i) => i + start);
  }
}
