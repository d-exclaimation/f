//
//  io.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

/**
 * A module for pipeable utilities for input and output for the native environment
 */
export namespace IO {
  /**
   * Output the console the value in a readable manner
   * @param value Any value
   */
  export function inspect(value: any): void {
    console.log(JSON.stringify(value, null, 2));
  }

  /**
   * Output string to the console
   * @param value Any value
   */
  export function print(value: string) {
    console.log(value);
  }

  /**
   * Output the console the value in a readable manner
   * @param value Any value
   * @param space The spacing for the formatting
   */
  export function json(value: any, space?: string | number | undefined) {
    console.log(JSON.stringify(value, null, space));
  }
}
