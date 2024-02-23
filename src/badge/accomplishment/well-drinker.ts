import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const WellDrinker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "well-drinker",
    setTitleId: 1964,
    names: [
        {value: "Well Drinker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've crafted your first Rare Incarnate Ability earning yourself this badge."}
    ],
    acquisition: "Craft a rare Incarnate Ability",
    links: [
        {title: "Well Drinker Badge", href: "https://homecoming.wiki/wiki/Well_Drinker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/well-drinker.png"}
    ],
};
