import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const WentOffScript: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "went-off-script",
    names: [
        {value: "Went off script"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Refuse to quarantine during The Graveyard Shift story arc."
};
