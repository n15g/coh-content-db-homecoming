import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Emancipator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "emancipator",
    setTitleId: 82,
    names: [
        {value: "Emancipator"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have defeated the Clockwork King in an alternate dimension where he realized his true " +
        "potential."}
    ],
    acquisition: "Complete the Investigate the psychic signal mission from Tina Macintyre",
    links: [
        {title: "Emancipator Badge", href: "https://paragonwiki.com/wiki/Emancipator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/emancipator.png"}
    ],
};