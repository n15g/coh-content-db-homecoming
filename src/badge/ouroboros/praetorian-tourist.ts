import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PraetorianTourist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "praetorian-tourist",
    names: [
        {value: "Praetorian Tourist"},
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete a Praetorian arc through Ouroboros"
};
