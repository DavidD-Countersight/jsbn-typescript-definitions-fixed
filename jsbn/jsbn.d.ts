declare module jsbn {
    class BigInteger {
        am(i, x, w, j, c, n);

        DB: number;
        DM: number;
        DV: number;

        FV: number;
        F1: number;
        F2: number;

        copyTo(r: BigInteger): void;
        fromInt(x: number): void;
        fromString(x: string): void;
        clamp(): void;
        dlShiftTo(n: number, r: BigInteger): void;
        drShiftTo(n: number, r: BigInteger): void;
        lShiftTo(n: number, r: BigInteger): void;
        rShiftTo(n: number, r: BigInteger): void;
        subTo(a: BigInteger, r: BigInteger): void;
        multiplyTo(a: BigInteger, r: BigInteger): void;
        squareTo(r: BigInteger): void;
        divRemTo(m: BigInteger, q: BigInteger, r: BigInteger): void;
        invDigit(): number;
        isEven(): boolean;
        exp(e: number, z: Reduction): BigInteger;
        toString(): string;
        negate(): BigInteger;
        abs(): BigInteger;
        compareTo(a: BigInteger): number;
        bitLength(): number;
        mod(a: BigInteger): BigInteger;
        modPowInt(e: number, m: BigInteger): BigInteger;

    }

    interface Reduction {
        convert(x: BigInteger): BigInteger;
        revert(x: BigInteger): BigInteger;
        reduce(x: BigInteger): void;
        mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void;
        sqrTo(x: BigInteger, r: BigInteger): void;
    }

    interface ReductionFactory<T extends Reduction> {
        new (m: BigInteger): T;
    }

    interface Classic extends Reduction {
    }

    interface ClassicFactory extends ReductionFactory<Classic> {
    }

    interface Montgomery extends Reduction {
    }

    interface MontgomeryFactory extends ReductionFactory<Montgomery> {
    }

    interface NullExp extends Reduction {
    }

    interface NullExpFactory extends ReductionFactory<NullExp> {
    }

    interface Barrett extends Reduction {
    }

    interface BarrettFactory extends ReductionFactory<Barrett> {
    }


}