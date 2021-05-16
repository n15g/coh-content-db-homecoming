import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Incarnate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "incarnate",
    setTitleId: 1965,
    names: [
        {value: "Incarnate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've crafted your first Very Rare Incarnate Ability earning yourself this badge."}
    ],
    acquisition: "Craft a very rare Incarnate Ability",
    links: [
        {title: "Incarnate Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Incarnate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate.png"}
    ],
};
