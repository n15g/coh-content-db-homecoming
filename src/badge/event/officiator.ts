import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Officiator: IBadgeData = {
    type: BadgeType.EVENT,
    key: "officiator",
    setTitleId: 2549,
    names: [
        {value: "Officiator"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Despite the Freedom Phalanx and Arachnos elite being dressed in their finest for a special occasion, you pulled no punches and demonstrated your prowess in combat by defeating each and every one.`},
    ],
    acquisition: `Defeat all 14 signature Heroes and Villains during the event.`,
    links: [
        {title: "Officiator", href: "https://homecoming.wiki/wiki/Officiator_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/officiator.png"}]
};
