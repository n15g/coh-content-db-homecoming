import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Unswerving: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "unswerving",
    names: [
        {value: "Unswerving"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Reach Veteran level 33",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-33.png"}]
};
