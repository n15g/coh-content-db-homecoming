import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Electrician: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "electrician",
    names: [
        {value: "Electrician"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Cap au Diable demons have learned not to mess with you."}
    ],
    acquisition: "Defeat 100 Gremlins",
    links: [
        {title: "Electrician Badge", href: "https://paragonwiki.com/wiki/Electrician_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/electrician.png"}
    ],
};