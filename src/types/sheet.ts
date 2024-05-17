import { Action } from "./actions";

/**
 * @property {Child[]} children - Direct children of the sheet. Display under the viewports.
 * @property {string} number - String! Used in the Navigation's 'Sheet number' column. Ex: A0.2
 */
interface SheetLayer {
    children: Child[];
    number: string;
    title: string;
    viewports: Viewport[];
}

/**
 * @property {Point[]} points - The bounding box of the Viewport
 */
interface Viewport {
    id: string;
    scale: number;
    points: Point[];
    annotations: Child[];
    children: Child[];
}

/**
 * NOTE: The same object could be displayed multiple times on the same sheet
 * if that sheet has multiple viewports, containing that object.
 */
type ChildId = string;

/**
 * A point represented as an array of two numbers (x, y) in vectorworks coordinate system
 */
type Point = [number, number];

/**
 * Polygon or polyline from the drawing, holding BIM data, corresponds to Vectorworks object.
 * @property {Child[]} children - Currently we expect that to be empty, but we might need nesting later on.
 * @property {boolean} isPolyClosed - true = closed polygon / false = polyline with no area
 */
interface Child {
    class: string;
    layer: string;
    style: string;
    id: ChildId;
    name: string;
    children: Child[];
    isPolyClosed: boolean;
    displayName: string;
    points: Point[];
    records: Record[];
    actions: Action[];
}

/**
 * @property {string} name - Used in localizing via DataSet.sourceOfData
 */
interface SimpleRecord {
    fields: RecordField[];
    isParametric: boolean;
    localizedName: string;
    name: string;
}

/**
 * @property {Record[]} ifcPsets - Optional: The record is IFC if this key exists.
 * Notice the nesting - it's a list of the same structure. The nested records are never IFC.
 */
interface Record extends SimpleRecord {
    ifcPsets?: SimpleRecord[];
}

/**
 * @property {string} name - Used in localizing via DataSet.sourceOfData
 * @property {number} type - For example, if type === 2 means a boolean value, so display in the UI with a checkbox
 */
interface RecordField {
    localizedName: string;
    name: string;
    type: number;
    value: string;
}

export type { SheetLayer, Child, ChildId, Point }
