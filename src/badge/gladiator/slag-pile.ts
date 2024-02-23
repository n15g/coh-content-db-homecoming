import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const SlagPile: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "slag-pile",
    setTitleId: 468,
    names: [
        {value: "Slag Pile"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "Hmm, maybe these reeking piles of junk are useful."}
    ],
    acquisition: "Earn the [badge:slag-reaper] Badge (Slag Golems)",
    links: [
        {title: "Slag Pile Badge", href: "https://homecoming.wiki/wiki/Slag_Pile_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
