//
//  f.ts
//  f
//
//  Created by d-exclaimation on 10:31.
//

/**
 * Cascade pattern from the functional programming world
 */
export class F<X> {
  private constructor(
    private _x: X
  ){}

  /**
   * Cascade the value into a given function and put the result into another F
   * @param g Function to pipe the value into
   * @returns A new F with the return value of the function
   */
  private pipe<Y>(g: (x: X) => Y | F<Y>): F<Y> {
    const y = g(this._x);
    
    // If not an object "in" throws an error, so casting is safe
    try {
      if ("_x" in y) {
        return y;
      }
      return new F(y);
    } catch {
      return new F(y as Y);
    }
  }

  /**
   * Cascade the value into a given function and put the result into another F
   * @param g Function to pipe the value into
   * @returns A new F with the return value of the function
   */
  public f<Y>(g: (x: X) => Y | F<Y>): F<Y> {
    return this.pipe(g);
  }


  /**
   * Asynchronously pipe the value into a given function and put the result into another F
   * @param g Async / sync function to pipe the value into
   * @returns A new F with the return value of the function
   */
  public a<Y>(g: (x: Awaited<X>) => Y | F<Y> | Promise<Y | F<Y>>): F<Promise<Y>> {
    return this.pipe(async prom => {
      const x = await prom;
      const y = await g(x);
      try {
        if ("_x" in y) {
          return y.y();
        }
        return y;
      } catch {
        return y as Y;
      }
    });
  }

  /**
   * Cascade a predicate
   * @param p Predicate to apply the value
   * @returns The result of the predicate
   */
  public p(p: (x: X) => boolean): boolean {
    return p(this._x);
  }

  /**
   * Cascade a void function to the wrapped value
   * @param z The void function to pipe
   */
  public z(z: (x: X) => void): void {
    z(this._x);
  }

  /**
   * Union 2 F's
   * @param g Another F to combine with
   * @returns A union of both F
   */
  public u<Y>(g: F<Y>): F<[X, Y]> {
    return new F([this._x, g._x]);
  }

  /**
   * End the piping and the value from F
   * @returns The value in the F
   */
  public y(): X {
    return this._x;
  }

  /**
   * Custom JSON encoding
   * @returns JSON value for F
   */
  public toJSON(): X {
    return this._x;
  }

  /**
   * Custom string encoding
   * @returns String format for F
   */
  public toString(): string {
    return `${this._x}`
  }

  /**
   * Create a new F to start the piping
   * @param x The initial value
   * @returns A new F with the value
   */
  public static x<X>(x: X): F<X> {
    return new F(x);
  }
}