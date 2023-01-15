//
//  io.ts
//  f
//
//  Created by d-exclaimation on 15 Jan 2023
//

export namespace IO {
  export function inspect(value: any): void {
    console.log(value);
  }

  export function print(value: string) {
    console.log(value);
  }

  export function json(value: any, space?: string | number | undefined) {
    console.log(JSON.stringify(value, null, space));
  }
}
