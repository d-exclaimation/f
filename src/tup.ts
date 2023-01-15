//
//  tup.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

/**
 * Helper function to create tuple with proper typing
 */
export function tup<T extends any[]>(...args: T): T {
  return args;
}
