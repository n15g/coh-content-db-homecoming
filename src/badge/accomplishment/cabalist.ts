import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Cabalist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "cabalist",
    setTitleId: 427,
    names: [
        {value: "Cabalist"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You aided the Cabal in their struggle against the loathsome Red Caps."}
    ],
    acquisition: "Complete the Katie Hannon Task Force: A Tangled Plot",
    links: [
        {title: "Cabalist Badge", href: "https://paragonwiki.com/wiki/Cabalist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/cabalist.png"}
    ],
};