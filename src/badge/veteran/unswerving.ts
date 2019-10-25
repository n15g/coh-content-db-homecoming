import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Unswerving: IBadgeData = {
    type: BadgeType.VETERAN,
    key: "unswerving",
    setTitleId: 634,
    names: [
        {value: "Unswerving"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `After paying your dues you have been recognized as 'Unswerving' by the government of Paragon City. You have attained thirty-three Veteran levels.`},
        {type: Alternate.V, value: `You continue to elude capture after all this time. You have attained thirty-three Veteran levels.`}
    ],
    acquisition: "Reach Veteran level 33",
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-33.png"}]
};
