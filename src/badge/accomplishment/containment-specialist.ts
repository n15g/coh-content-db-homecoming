import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ContainmentSpecialist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "containment-specialist",
    names: [
        {value: "Containment Specialist"}
    ],
    alignment: ALIGNMENT_HERO,
    acquisition: "Turn off the sprinklers before the timer runs out during The Graveyard Shift story arc."
};
