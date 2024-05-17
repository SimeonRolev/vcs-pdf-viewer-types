import { DataSheets } from "./data-sheets";
import { SheetLayer } from "./sheet";
import Units from "./units";
import Worksheets from "./worksheets";

/**
 * @property {SheetLayer[]} sheetLayers - Metadata for every sheet.
 * The metadata for every PDF page should be present under `sheetLayers[page.pageNumber - 1]`
 * Because PDF natively counts pages starting from 1.
 */
interface Metadata {
    formatVersion: number;
    dataSheets: DataSheets;
    sheetLayers: SheetLayer[];
    worksheets?: Worksheets;
    units: Units;
}

export default Metadata;
