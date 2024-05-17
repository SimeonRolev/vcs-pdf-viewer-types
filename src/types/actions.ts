/* 
Supported link actions:
1) A Child area that navigates to another area of the same Child (1: 1). Might have multiple links
2) A Child area that navigates to a Viewport
3) To page number
4) To web URL
*/

import { ChildId, Point } from "./sheet";

/**
 * Fit to object or its sub-area.
 * @property {ChildId} id - Object selector
 * @property {Point[]} area - Sub-area of the target Child that should be focused
 */
interface LinkToObject {
    id: ChildId;
    area?: Point[];
}

/**
 * Instaces of this interface contain a SINGLE non-empty `effect field`.
 * `Effect filed`'s name identifies the action type (the viewer's handler function).
 * `Effect field`'s value is the `args` to call the handler function with. Args format is action specific.
 * The first non-empty `effect field` identifies the action.
 * @property {Point[]} area - Sub-area of the child that triggers the effect. Default to the whole child if area is not defined.
 * @property {string} linkToViewport - Viewport.id
 */
interface Action {
    area?: Point[];

    // Effect fields
    linkToSheet?: number;
    linkToURL?: string;
    linkToObject?: LinkToObject;
    linkToViewport?: string;
}

export { Action }
