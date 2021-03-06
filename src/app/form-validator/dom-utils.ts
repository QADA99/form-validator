export function isInTab(element: HTMLElement): boolean {
    let tabpanel = findParentBySelector(element, `[role="tabpanel"]`) as HTMLElement;
    return tabpanel != null;
}
export function getTabParent(element: HTMLElement): HTMLElement {
    return findParentBySelector(element, `[role="tabpanel"]`) as HTMLElement;
}
export function isInRegion(element: HTMLElement): boolean {
    let region = findParentBySelector(element, `[role="region"]`) as HTMLElement;
    return region != null;
}
export function getRegionParent(element: HTMLElement): HTMLElement {
    return findParentBySelector(element, `[role="region"]`) as HTMLElement;
}
export function isHidden(element: HTMLElement): boolean {
    return element.getAttribute("aria-hidden") == "true";
}
export function openRegionOrTab(element: HTMLElement) {
    let linkToOpen = document.querySelector(`[aria-controls="${element.id}"]`) as HTMLElement;
    linkToOpen.click();
}
export function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while (cur && !collectionHas(all, cur)) { //keep going up until you find a match
        cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
}
function collectionHas(a, b) { //helper function (see below)
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] == b) return true;
    }
    return false;
}