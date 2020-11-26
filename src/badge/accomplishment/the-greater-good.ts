import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TheGreaterGood: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-greater-good",
    names: [
        {value: "The Greater Good"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Quarantine during The Graveyard Shift story arc."
};
