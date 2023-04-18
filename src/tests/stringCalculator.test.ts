/*
null -> 0
"" -> 0
"1" -> 1
"1,2" -> 3
"1,2,3"-> 6
"a" -> 0
"1,a" -> 1
"//#/4#3" -> 7
"//#/4,3" -> 0
"//&/4&3&3" -> 7
 */



import {sumNumbers} from "../core/stringCalculator";

describe('The string calculator', () => {
    it('does not increment when null or empty', () => {
        expect(sumNumbers(null)).toBe(0);
        expect(sumNumbers("")).toBe(0);
    });

    it('convert a string into a number', () => {
        expect(sumNumbers("1")).toBe(1);
    });

    it('sum all numbers in a string', () => {
        expect(sumNumbers("1,2")).toBe(3);
        expect(sumNumbers("1,2,3")).toBe(6);
    });

    it('does not increment when there are no numbers', () => {
        expect(sumNumbers("a")).toBe(0);
        expect(sumNumbers("1,a")).toBe(1);
        expect(sumNumbers("1a,2")).toBe(2);
    });

    it('sum all numbers separated by a symbol', () => {
        expect(sumNumbers("//#/4#3")).toBe(7);
        expect(sumNumbers("//#/4,3")).toBe(0);
        expect(sumNumbers("//&/4&3&3")).toBe(10);
    });


});
