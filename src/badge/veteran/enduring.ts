import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Enduring: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "enduring",
    setTitleId: 1279,
    names: [
        {value: "Enduring"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `This world is in a state of constant change, but there's one thing people can count on: you. You have attained sixty-six Veteran levels.`},
        {type: Alternate.V, value: `This world is in a state of constant change, but there's one thing that people will always fear: you. You have attained sixty-six Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 66",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-66.png"}]
};
