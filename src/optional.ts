//
//  optional.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { Func, PipeableFunc, UnaryFunc } from "./types";

/**
 * An optional value, (include the value, null, or undefined)
 */
export type Optional<T> = T | null | undefined;

/**
 * A module for pipeable utilities for optionals and nullables
 */
export namespace Opt {
  // MARK: - Instance functions

  /**
   * Check if the optional is null or undefined
   * @param opt
   * @returns True if the value is null or undefined
   */
  export function isNil<T>(opt: Optional<T>): opt is null | undefined {
    return opt === null || opt === undefined;
  }

  /**
   * Perform side effects if the optional is not null or optional
   * @param func Function side effect for each element
   * @returns A pipeable function that returns nothing
   */
  export function each<T>(
    func: UnaryFunc<T, void>
  ): PipeableFunc<Optional<T>, void> {
    return (opt) => !isNil(opt) && func(opt);
  }

  /**
   * Perform side effects if the optional is not null or undefined, but returns the original enumerable
   * @param func Function side effect for each element
   * @returns A pipeable function that returns the original optional
   */
  export function tap<T>(
    func: UnaryFunc<T, void>
  ): PipeableFunc<Optional<T>, Optional<T>> {
    return (opt) => {
      if (!isNil(opt)) func(opt);
      return opt;
    };
  }

  /**
   * Apply a function on element if the optional is not null or undefined, and return an optional with the result
   * @param func Function to apply
   * @returns A pipeable function that returns the resulting optional
   */
  export function map<T, K>(
    func: UnaryFunc<T, K>
  ): PipeableFunc<Optional<T>, Optional<K>> {
    return (opt) => {
      if (isNil(opt)) return opt;
      return func(opt);
    };
  }

  /**
   * Apply a predicate on element if the optional is not null or undefined and return an optional with the value is passing, or undefined
   * @param predicate Predicate to apply
   * @returns A pipeable function that returns the resulting optional
   */
  export function filter<T>(
    predicate: UnaryFunc<T, boolean>
  ): PipeableFunc<Optional<T>, Optional<T>> {
    return (opt) => {
      if (isNil(opt)) return opt;
      return predicate(opt) ? opt : undefined;
    };
  }

  /**
   * Perform the appropriate callback given the optional value, and return the result
   * @param callback Callbacks for both cases
   * @returns A pipeable function that return the result from either callbacks
   */
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

  /**
   * Create an optional with some value
   * @param value The value
   * @returns An optional of the same type
   */
  export function some<T>(value: T): Optional<T> {
    return value;
  }

  /**
   * Create an optional with a type with have no value
   * @returns An optional of the same type
   */
  export function none<T = never>(): Optional<T> {
    return undefined;
  }
}
