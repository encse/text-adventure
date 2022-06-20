import { findItemsByName, Result, State } from "../defs";
import { dontUnderstand, disambiguate } from "./feedback";

export function use(state: State, obj: string): Result {
    if (obj === '') {
        return `What do you want to use?`;
    } else {
        const items = findItemsByName(state, obj);
        if (items.length === 1) {
            return items[0].use(state);
        } else if (items.length > 1) {
            return disambiguate(items);
        } else {
            return dontUnderstand(state, obj);
        }
    }
}