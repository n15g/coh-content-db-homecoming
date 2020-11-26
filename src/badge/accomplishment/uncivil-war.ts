import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const UncivilWar: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "uncivil-war",
    names: [
        {value: "Uncivil War"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Complete Agent Watkins' arc."
};
