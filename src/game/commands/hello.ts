import { Result, State } from "../defs";
import { roomColor } from "../items/room";

export function hello(state: State, obj: string): Result {
    if (roomColor(state) === 'black') {
        return "Is it a good idea to start making noise in a dark room?\n- Hello!\nNo answer. Not sure if this is a bad thing though.";
    } else {
        return "- Khmm ... hello?\nNobody is here.";
    }
}