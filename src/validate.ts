import Metadata from './types/main';

export const metadata: Metadata = {
    formatVersion: 2,
    dataSheets: {
        'Sheet 1': {
            'DataSet 1': [
                {
                    label: 'Area',
                    sourceOfData: 'MyRecord.Field1',
                },
                {
                    label: 'Area2',
                    sourceOfData: '',
                    isSeparator: true,
                },
            ],
        },
    },
    sheetLayers: [
        {
            children: [
                {
                    class: 'Rectangle',
                    layer: 'Default',
                    style: 'Basic',
                    id: 'child_1',
                    isPolyClosed: true,
                    displayName: 'Room 1',
                    name: 'Room 1',
                    children: [],
                    actions: [],
                    points: [
                        [0, 0],
                        [100, 0],
                        [100, 50],
                        [0, 50],
                    ],
                    records: [
                        {
                            fields: [
                                {
                                    localizedName: 'Type:',
                                    name: 'Type:',
                                    type: 8,
                                    value: 'Standard Wall',
                                },
                            ],
                            isParametric: true,
                            localizedName: 'Wall',
                            name: 'Wall',
                        },
                        {
                            ifcPsets: [
                                {
                                    fields: [
                                        {
                                            localizedName: 'Reference',
                                            name: 'Reference',
                                            type: 4,
                                            value: 'F-4',
                                        },
                                    ],
                                    isParametric: false,
                                    localizedName: 'Pset_WallCommon',
                                    name: 'Pset_WallCommon',
                                },
                            ],
                            fields: [
                                {
                                    localizedName: 'GlobalId',
                                    name: 'GlobalId',
                                    type: 4,
                                    value: '3wRpTYUaPCZPkxR3SFoFgR',
                                },
                            ],
                            isParametric: false,
                            localizedName: 'IfcWallStandardCase',
                            name: 'IfcWallStandardCase',
                        },
                    ],
                },
            ],
            number: 'A1',
            title: 'Main Floor',
            viewports: [
                {
                    id: 'asasdsa',
                    scale: 0.01,
                    points: [
                        [20, 20],
                        [120, 70],
                    ],
                    annotations: [],
                    children: [],
                },
            ],
        }
    ],
    worksheets: {
        excelFile: 'encoded-pdf',
        databaseRowMap: {
            1: {
                // Excel page 1
                2: ['child_1'], // Row 2
            },
        },
    },
    units: {
        decimalPrecision: 2,
        decimalRoundingBase: 10,
        fractionStyle: 0, // Assuming no fractions used
        fractionalPrecision: 0,
        roundingStyle: "Fractional",
        showLeadingZeroes: false,
        showThousandSep: true,
        showTrailingZeroes: false,
        showUnitMarks: true,
        unitMark: 'm',
        unitsPerInch: 25.4,
    },
}