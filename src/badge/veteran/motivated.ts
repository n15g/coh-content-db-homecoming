import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Motivated: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "motivated",
    setTitleId: 970,
    names: [
        {value: "Motivated"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You've gone this far and the road ahead looks as bright as ever. You have attained forty-eight Veteran levels.`},
        {type: Alternate.V, value: `You've gone this far and the future looks even more promising. You have attained forty-eight Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 48",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-48.png"}]
};
