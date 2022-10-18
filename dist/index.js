"use strict";
//
//  index.ts
//  f
//
//  Created by d-exclaimation on 11:08.
//  Copyright © 2022 d-exclaimation. All rights reserved.
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
const f_1 = require("./f");
// -- Example of piping functions and getting the end result
const res0 = (0, f_1.f)(1)
    .f(x => x + 1)
    .f(x => x * 2)
    .f(x => Math.pow(x, 2))
    .f(x => x / 2)
    .x();
// or
const res1 = f_1.F.new(1)
    .next(num => num + 1)
    .next(num => num * 2)
    .next(num => Math.pow(num, 2))
    .next(num => num / 2)
    .end();
console.log({ res0, res1 });
// { res0: 8, res1: 8 }
// -- Example of using a predicate
const res2 = (0, f_1.f)(1)
    .f(x => x + 1)
    .f(x => x * 2)
    .f(x => Math.pow(x, 2))
    .f(x => x / 2)
    .p(x => x > 0);
const res3 = f_1.F.new(1)
    .next(num => num + 1)
    .next(num => num * 2)
    .next(num => Math.pow(num, 2))
    .next(num => num / 2)
    .is(num => num > 0);
console.log({ res2, res3 });
// { res2: true, res3: true }
// -- Example of ending the pipe with a callback that return no valud
let res = {};
(0, f_1.f)(1)
    .f(x => x + 1)
    .f(x => x * 2)
    .f(x => Math.pow(x, 2))
    .f(x => x / 2)
    .z(x => { res = Object.assign(Object.assign({}, res), { res4: x }); });
f_1.F.new(1)
    .next(num => num + 1)
    .next(num => num * 2)
    .next(num => Math.pow(num, 2))
    .next(num => num / 2)
    .void(num => { res = Object.assign(Object.assign({}, res), { res5: num }); });
console.log(res);
// { res4: 8, res5: 8 }
// -- Example of piping with async functions and promises using (f.a / F.async)
const res6 = (0, f_1.f)(new Promise(r => r(1)))
    .f(f_1.f.a((x) => __awaiter(void 0, void 0, void 0, function* () { return x + 1; })))
    .f(f_1.f.a((x) => __awaiter(void 0, void 0, void 0, function* () { return x * 2; })))
    .f(f_1.f.a((x) => __awaiter(void 0, void 0, void 0, function* () { return Math.pow(x, 2); })))
    .f(f_1.f.a((x) => __awaiter(void 0, void 0, void 0, function* () { return x / 2; })))
    .x();
const res7 = f_1.F.new(new Promise(r => r(1)))
    .next(f_1.F.async((num) => __awaiter(void 0, void 0, void 0, function* () { return num + 1; })))
    .next(f_1.F.async((num) => __awaiter(void 0, void 0, void 0, function* () { return num * 2; })))
    .next(f_1.F.async((num) => __awaiter(void 0, void 0, void 0, function* () { return Math.pow(num, 2); })))
    .next(f_1.F.async((num) => __awaiter(void 0, void 0, void 0, function* () { return num / 2; })))
    .end();
Promise.all([res6, res7]).then(([res6, res7]) => console.log({ res6, res7 }));
// { res4: 8, res5: 8 }
