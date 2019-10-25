import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Faithful: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "faithful",
    setTitleId: 625,
    names: [
        {value: "Faithful"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Paragon City thanks you for your continued support in keeping the City safe. You have attained six Veteran levels.`},
        {type: Alternate.V, value: `You are ever faithful in your service, to cause pain and misery to all those in your way. You have attained six Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 6",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-6.png"}]
};
