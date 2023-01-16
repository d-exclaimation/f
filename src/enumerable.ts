//
//  enum.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import { tup } from "./tup";
import type { Func, UnaryFunc, UnaryPredicate } from "./types";

/**
 * A module for pipeable utilities for enumerables / arrays / sequences
 */
export namespace Enum {
  // MARK: - Instance functions

  /**
   * Perform side effects for each element in the enumerable
   * @param func Function side effect for each element
   * @returns A pipeable function that returns nothing
   */
  export function each<T>(func: UnaryFunc<T, void>): UnaryFunc<T[], void> {
    return (arr) => arr.forEach((x) => func(x));
  }

  /**
   * Perform side effects for each element in the enumerable, but returns the original enumerable
   * @param func Function side effect for each element
   * @returns A pipeable function that returns the original enumerable
   */
  export function tap<T>(func: UnaryFunc<T, void>): UnaryFunc<T[], T[]> {
    return (arr) => {
      arr.forEach((x) => func(x));
      return arr;
    };
  }

  /**
   * Apply a function on each element in the enumerable and return an enumerable with the result of the function
   * @param func Function to apply
   * @returns A pipeable function that returns the resulting enumerable
   */
  export function map<T, K>(func: UnaryFunc<T, K>): UnaryFunc<T[], K[]> {
    return (arr) => arr.map((x) => func(x));
  }

  /**
   * Apply a predicate on each element in the enumerable and return an enumerable with only element passing the predicate
   * @param predicate Predicate to apply
   * @returns A pipeable function that returns the resulting enumerable
   */
  export function filter<T>(predicate: UnaryPredicate<T>): UnaryFunc<T[], T[]> {
    return (arr) => arr.filter((x) => predicate(x));
  }

  /**
   * Get an element from the enumerable at the given index (backwards if given negative)
   * @param idx The index of the element (backwards if given negative)
   * @returns A pipeable function that returns element at the index or null
   */
  export function at<T>(idx: number): UnaryFunc<T[], T | null> {
    return (arr) => arr[idx < 0 ? arr.length + idx : idx] ?? null;
  }

  /**
   * Count the element from the enumerable given the predicate
   * @param predicate The predicate given (if not given, count all element)
   * @returns A pipeable function that returns the number of how many element passes the predicate (or all, if predicate is not given)
   */
  export function count<T>(
    predicate?: UnaryPredicate<T>
  ): UnaryFunc<T[], number> {
    return (arr) => {
      if (!predicate) return arr.length;
      return arr.filter((x) => predicate(x)).length;
    };
  }

  /**
   * Reduce an enumerable for each element and the previous result into the next accumulated result
   * @param initial The initial value for the accumulated result
   * @param func Function to get the next accumulated result
   * @returns A pipeable function that returns the last acuumulated result
   */
  export function reduce<T, K>(
    initial: K,
    func: Func<[K, T], K>
  ): UnaryFunc<T[], K> {
    return (arr) => arr.reduce((acc, x) => func(acc, x), initial);
  }

  /**
   * Map an enumerable and flatten each of the results
   * @param func Function that return another enumerable to be flatten
   * @returns A pipeable function that returns the flatten resulting enumerable
   */
  export function flatMap<T, K>(func: UnaryFunc<T, K[]>): UnaryFunc<T[], K[]> {
    return (arr) => arr.flatMap((x) => func(x));
  }

  /**
   * Flatten each of element of the nested enumerable
   * @param arr The enumerable to be flatten
   * @returns The flatten resulting enumerable
   */
  export function flatten<T>(arr: T[][]): T[] {
    return flatMap<T[], T>((value) => value)(arr);
  }

  /**
   * Get all indices of all element in the enumerable
   * @param arr The enumerable
   * @returns A enumerable of indices
   */
  export function indices<T>(arr: T[]): number[] {
    return arr.map((_, i) => i);
  }

  /**
   * Get all indices of all element in the enumerable and return enumerable of pairs of index and element
   * @param arr The enumerable
   * @returns A enumerable of indices value pair
   */
  export function enumerated<T>(arr: T[]): [value: T, i: number][] {
    return arr.map((value, i) => tup(value, i));
  }

  // MARK: - Static functions

  /**
   * Creates a new enumerable with the size given, and fill in the enumerable with the function generator given
   * @param size The amount of element should be in the enumerable
   * @param func The generator function for each element
   * @returns A new enumerable with the generated element of the given size
   */
  export function fill<T>(size: number, func: UnaryFunc<number, T>): T[] {
    return new Array<null>(size).fill(null).map((_, i) => func(i));
  }

  /**
   * Creates a new number enumerable form the start until before the end
   * @param start Starting number (inclusive)
   * @param end Ending number (exclusive)
   * @returns A new number enumerable
   */
  export function range(start: number, end: number): number[] {
    return fill(end - start + 1, (i) => i + start);
  }
}
