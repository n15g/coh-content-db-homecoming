import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Arachnobot: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "arachnobot",
    setTitleId: 453,
    names: [
        {value: "Arachnobot"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Password accepted. This unit will obey."}
    ],
    acquisition: "Earn the [badge:agent-of-discord] Badge (Arachnos)",
    links: [
        {title: "Arachnobot Badge", href: "https://homecoming.wiki/wiki/Arachnobot_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
