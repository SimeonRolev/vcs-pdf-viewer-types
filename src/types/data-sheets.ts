/**
 * Used in the Object Info's Data tab for customizing the set of fields presented.
 * @property {string} [name] - This property matches Child.displayName
 * @example
 * ```json
{
    "Wall": {
        "BIM Wall": [
            {
                "label": "Field 1",
                "sourceOfData": "Record.IFCpset.Field",
                "isSeparator": true
            },
            {
                "label": "",
                "sourceOfData": "Record.Field"
            }
        ]
    }
}
 * ```
 */
interface DataSheets {
    [name: string]: DataSets;
}

interface DataSets {
    [dataSet: string]: DataSet[];
}

/**
 * @property {string} label - Overrides the localizedName for the field that we found using `sourceOfData`
 * @property {string} sourceOfData - A dot separated keys, used to lookup names inside a `Child.records`.
 * An IFC record has the Record.IFCpsets key.
 * If the keys are two, search among the non-ifc records. Ex. '<recordName>.<fieldName>'
 * If the keys are three, search among the IFC records. Ex. '<recordName>.<IFCpsetName>.<fieldName>'
 * @property {boolean} isSeparator - Optional: Only add the field if true
 */
interface DataSet {
    label: string;
    sourceOfData: string;
    isSeparator?: true;
}

export type { DataSheets }
