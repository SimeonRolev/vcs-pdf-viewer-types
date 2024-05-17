enum RoundingStyle {
    Decimal = "Decimal",
    Fractional = "Fractional",
    FractionalAndDecimal = "FractionalAndDecimal",
}

/**
 * @property {string} specialUnitDivider - Optional: If those are pesent, we measure in Feet + Inches
 * @property {string} specialUnitMark - Optional: If those are pesent, we measure in Feet + Inches
 */
interface Units {
    decimalPrecision: number;
    decimalRoundingBase: number;
    fractionStyle: number;
    fractionalPrecision: number;
    roundingStyle: RoundingStyle;
    showLeadingZeroes: boolean;
    showThousandSep: boolean;
    showTrailingZeroes: boolean;
    showUnitMarks: boolean;
    specialUnitDivider?: string;
    specialUnitMark?: string;
    unitMark: string;
    unitsPerInch: number;
}

export default Units
