import { ChildId } from "./sheet";

type StingNumber = string;

/**
 * @property {string} excelFile - Encoded .xlsx file. Read it with an Excel reader.
 * @property {object} databaseRowMap - Each page of the .xlsx file is a Worksheet (excelPageNumber).
 * For that page, some of the table rows could be associated with an object from the .vcdoc file
 * Clicking them should navigate the viewer to that object.
 * @example
 * ```json
{
    "excelFile": "encoded-pdf ...",
    "databaseRowMap": {
        "2": {
            "5": ["1111-2222-3333"],
        },
    },
}
 * ```
 */
interface Worksheets {
    excelFile: string;
    databaseRowMap: {
        [excelPageNumber: StingNumber]: {
            [excelPageRow: StingNumber]: ChildId[]
        }
    };
}

export default Worksheets;
