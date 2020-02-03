import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Snowbeast: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "snowbeast",
    setTitleId: 530,
    names: [
        {value: "Snowbeast"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You now can summon a Snowbeast minion in the Arena pet battles."}
    ],
    acquisition: "Earn the [badge:toy-collector] Badge (Winter Horde)",
    links: [
        {title: "Snowbeast Badge", href: "https://paragonwiki.com/wiki/Snowbeast_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
}
