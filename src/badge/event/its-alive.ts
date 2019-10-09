import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ItsAlive: IBadgeData = {
    type: BadgeType.EVENT,
    key: "its-alive",
    names: [
        {value: "It's Alive!"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You defeated the Abomination and 99 of Dr. Kane's zombies in under 12 minutes!"},
    ],
    acquisition: "Defeat 99 zombies in the graveyard while the Abomination is alive, and then defeat the Abomination in under 12 minutes during the Halloween event.",
    links: [
        {title: "It's Alive! Badge", href: "https://paragonwiki.com/wiki/It%27s_Alive!_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/its-alive.png"}]
};
