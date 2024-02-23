import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Cog: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "cog",
    setTitleId: 476,
    names: [
        {value: "Cog"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "It doesn't take much to make these machines fight for you."}
    ],
    acquisition: "Earn the [badge:gearsmasher] Badge (Clockwork)",
    links: [
        {title: "Cog Badge", href: "https://homecoming.wiki/wiki/Cog_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
