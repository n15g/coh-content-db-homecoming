import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Empowered: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "empowered",
    setTitleId: 1449,
    names: [
        {value: "Empowered"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've crafted your first Uncommon Incarnate Ability earning yourself this badge."}
    ],
    acquisition: "Craft an uncommon Incarnate Ability",
    links: [
        {title: "Empowered Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Empowered_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/empowered.png"}
    ],
};
