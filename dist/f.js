"use strict";
//
//  f.ts
//  f
//
//  Created by d-exclaimation on 10:31.
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.f = exports.F = void 0;
/**
 * Pipe pattern from the functional programming world
 */
class F {
    constructor(wrapped) {
        this.wrapped = wrapped;
    }
    /**
     * Pipe the value into a given function and put the result into another F
     * @param g Function to pipe the value into
     * @returns A new F with the return value of the function
     */
    pipe(g) {
        const y = g(this.wrapped);
        // If not an object "in" throws an error, so casting is safe
        try {
            if ("wrapped" in y) {
                return y;
            }
            return new F(y);
        }
        catch (_a) {
            return new F(y);
        }
    }
    /**
     * Pipe the value into a given function and put the result into another F
     * @param g Function to pipe the value into
     * @returns A new F with the return value of the function
     */
    next(g) {
        return this.pipe(g);
    }
    /**
     * Pipe the value into a given function and put the result into another F
     * @param g Function to pipe the value into
     * @returns A new F with the return value of the function
     */
    f(g) {
        return this.pipe(g);
    }
    /**
     * Pipe a predicate
     * @param p Predicate to apply the value
     * @returns The result of the predicate
     */
    is(p) {
        return p(this.wrapped);
    }
    /**
     * Pipe a predicate
     * @param p Predicate to apply the value
     * @returns The result of the predicate
     */
    p(p) {
        return this.is(p);
    }
    /**
     * Pipe a void function to the wrapped value
     * @param z The void function to pipe
     */
    void(z) {
        z(this.wrapped);
    }
    /**
     * Pipe a void function to the wrapped value
     * @param z The void function to pipe
     */
    z(z) {
        this.void(z);
    }
    /**
     * Get the value from F
     */
    get value() {
        return this.wrapped;
    }
    /**
     * End the piping and the value from F
     * @returns The value in the F
     */
    x() {
        return this.wrapped;
    }
    /**
     * End the piping and the value from F
     * @returns The value in the F
     */
    end() {
        return this.value;
    }
    /**
     * Get the value as a flattened Promise
     * @returns The value as a promise
     */
    promise() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.wrapped;
        });
    }
    /**
     * Custom JSON encoding
     * @returns JSON value for F
     */
    toJSON() {
        return this.wrapped;
    }
    /**
     * Custom string encoding
     * @returns String format for F
     */
    toString() {
        return `${this.wrapped}`;
    }
    /**
     * Create a new F to start the piping
     * @param x The initial value
     * @returns A new F with the value
     */
    static new(x) {
        return new F(x);
    }
    /**
     * Higher order function that allow the function to play with the awaited value
     * @param g Function (async or not) that process the awaited value in the F
     * @returns A function that can be use in the pipe for a Promise
     */
    static async(g) {
        return (prom) => __awaiter(this, void 0, void 0, function* () {
            const x = yield prom;
            return g(x);
        });
    }
}
exports.F = F;
/**
 * Create a new F to start the piping
 * @param x The initial value
 * @returns A new F with the value
 */
function f(x) {
    return F.new(x);
}
exports.f = f;
(function (f) {
    /**
     * Higher order function that allow the function to play with the awaited value
     * @param g Function (async or not) that process the awaited value in the F
     * @returns A function that can be use in the pipe for a Promise
     */
    function a(g) {
        return (prom) => __awaiter(this, void 0, void 0, function* () {
            const x = yield prom;
            return g(x);
        });
    }
    f.a = a;
})(f = exports.f || (exports.f = {}));
