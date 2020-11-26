import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const TarnishedStar: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tarnished-star",
    names: [
        {value: "Tarnished Star"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    acquisition: "Turn off the sprinklers before the timer runs out during The Graveyard Shift story arc."
};
