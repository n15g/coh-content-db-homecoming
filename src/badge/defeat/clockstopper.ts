import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Clockstopper: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "clockstopper",
    setTitleId: 32,
    names: [
        {value: "Clockstopper"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have defeated Babbage, one of the greatest works of the Clockwork King."}
    ],
    acquisition: "Defeat Babbage, a monster that spawns in Boomtown or in an ambush in the Synapse Task Force",
    links: [
        {title: "Clockstopper Badge", href: "https://homecoming.wiki/wiki/Clockstopper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/clockwork.png"}
    ],
};
