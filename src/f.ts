//
//  f.ts
//  f
//
//  Created by d-exclaimation on 10:31.
//

/**
 * Pipe pattern from the functional programming world
 */
export class F<X> {
  private constructor(
    private wrapped: X
  ){}

  /**
   * Pipe the value into a given function and put the result into another F
   * @param g Function to pipe the value into
   * @returns A new F with the return value of the function
   */
  private pipe<Y>(g: (x: X) => Y | F<Y>): F<Y> {
    const y = g(this.wrapped);
    
    // If not an object "in" throws an error, so casting is safe
    try {
      if ("wrapped" in y) {
        return y;
      }
      return new F(y);
    } catch {
      return new F(y as Y);
    }
  }

  /**
   * Pipe the value into a given function and put the result into another F
   * @param g Function to pipe the value into
   * @returns A new F with the return value of the function
   */
  public next<Y>(g: (x: X) => Y | F<Y>): F<Y> {
    return this.pipe(g);
  }

  /**
   * Pipe the value into a given function and put the result into another F
   * @param g Function to pipe the value into
   * @returns A new F with the return value of the function
   */
  public f<Y>(g: (x: X) => Y | F<Y>): F<Y> {
    return this.pipe(g);
  }

  /**
   * Pipe a predicate
   * @param p Predicate to apply the value
   * @returns The result of the predicate
   */
  public is(p: (x: X) => boolean): boolean {
    return p(this.wrapped);
  }

  /**
   * Pipe a predicate
   * @param p Predicate to apply the value
   * @returns The result of the predicate
   */
  public p(p: (x: X) => boolean): boolean {
    return this.is(p);
  }


  /**
   * Pipe a void function to the wrapped value
   * @param z The void function to pipe
   */
  public void(z: (x: X) => void): void {
    z(this.wrapped);
  }

  /**
   * Pipe a void function to the wrapped value
   * @param z The void function to pipe
   */
  public z(z: (x: X) => void): void {
    this.void(z);
  }

  /**
   * Get the value from F
   */
  public get value(): X {
    return this.wrapped;
  }

  /**
   * End the piping and the value from F
   * @returns The value in the F
   */
  public x(): X {
    return this.wrapped;
  }

  /**
   * End the piping and the value from F
   * @returns The value in the F
   */
  public end(): X {
    return this.value;
  }

  /**
   * Get the value as a flattened Promise
   * @returns The value as a promise
   */
  public async promise(): Promise<Awaited<X>> {
    return await this.wrapped;
  }

  /**
   * Custom JSON encoding
   * @returns JSON value for F
   */
  public toJSON(): X {
    return this.wrapped;
  }

  /**
   * Custom string encoding
   * @returns String format for F
   */
  public toString(): string {
    return `${this.wrapped}`
  }

  /**
   * Create a new F to start the piping
   * @param x The initial value
   * @returns A new F with the value
   */
  public static new<X>(x: X): F<X> {
    return new F(x);
  }

  /**
   * Higher order function that allow the function to play with the awaited value
   * @param g Function (async or not) that process the awaited value in the F
   * @returns A function that can be use in the pipe for a Promise
   */
  public static async<X, Y>(g: (x: Awaited<X>) => Y | Promise<Y>): (x: Promise<X>) => Promise<Y> {
    return async (prom) => {
      const x = await prom;
      return g(x);
    };
  }
}

/**
 * Create a new F to start the piping
 * @param x The initial value
 * @returns A new F with the value
 */
export function f<X>(x: X): F<X> {
  return F.new(x);
}

export namespace f {
  /**
   * Higher order function that allow the function to play with the awaited value
   * @param g Function (async or not) that process the awaited value in the F
   * @returns A function that can be use in the pipe for a Promise
   */
  export function a<X, Y>(g: (x: Awaited<X>) => Y | Promise<Y>): (x: Promise<X>) => Promise<Y> {
    return async (prom) => {
      const x = await prom;
      return g(x);
    };
  }
}