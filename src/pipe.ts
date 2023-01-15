//
//  pipe.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

import type { PipeableFunc } from "./types";

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2>(input: T1, pipe: PipeableFunc<T1, T2>): T2;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>
): T3;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>
): T4;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>
): T5;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>
): T6;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>
): T7;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>
): T8;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>
): T9;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>,
  pipe9: PipeableFunc<T9, T10>
): T10;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>,
  pipe9: PipeableFunc<T9, T10>,
  pipe10: PipeableFunc<T10, T11>
): T11;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>,
  pipe9: PipeableFunc<T9, T10>,
  pipe10: PipeableFunc<T10, T11>,
  pipe11: PipeableFunc<T11, T12>
): T12;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>,
  pipe9: PipeableFunc<T9, T10>,
  pipe10: PipeableFunc<T10, T11>,
  pipe11: PipeableFunc<T11, T12>,
  pipe12: PipeableFunc<T12, T13>
): T13;

/**
 * Pipe a value into 1 or many pipeable function
 */
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
  input: T1,
  pipe1: PipeableFunc<T1, T2>,
  pipe2: PipeableFunc<T2, T3>,
  pipe3: PipeableFunc<T3, T4>,
  pipe4: PipeableFunc<T4, T5>,
  pipe5: PipeableFunc<T5, T6>,
  pipe6: PipeableFunc<T6, T7>,
  pipe7: PipeableFunc<T7, T8>,
  pipe8: PipeableFunc<T8, T9>,
  pipe9: PipeableFunc<T9, T10>,
  pipe10: PipeableFunc<T10, T11>,
  pipe11: PipeableFunc<T11, T12>,
  pipe12: PipeableFunc<T12, T13>,
  ...pipelines: PipeableFunc<any, any>[]
): unknown;
export function pipe<T>(input: T, ...pipeline: PipeableFunc<any, any>[]): any;

/**
 * Pipe a value into 1 or many pipeable function
 * @param input Value to be put into a pipeline
 * @param pipeline Pipeline of pipeable functions
 * @returns The result of all the pipeline running in series
 */
export function pipe<T>(input: T, ...pipeline: PipeableFunc<any, any>[]): any {
  return pipeline.reduce((acc, f) => f(acc), input);
}
