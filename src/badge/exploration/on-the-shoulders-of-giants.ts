import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {KallistiWharf} from "../../map/kallisti-wharf";

export const OnTheShouldersOfGiants: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "on-the-shoulders-of-giants",
    names: [{value: "On the Shoulders of Giants"}],
    alignment: ALIGNMENT_ANY,
    mapKey: KallistiWharf.key
};
