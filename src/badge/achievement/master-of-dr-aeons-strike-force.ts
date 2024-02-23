import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfDrAeonsStrikeForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-dr-aeons-strike-force",
    setTitleId: 2482,
    names: [
        {value: "Master of Dr. Aeon's Strike Force"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have proven yourself Master of Dr. Aeon's Strike Force.`}
    ],
    acquisition: `Earn the [badge:cant-touch-this], [badge:power-overwhelming], [badge:ripple-raider] and [badge:unfriendly-fire] badges.`,
    links: [
        {title: "Master of Dr. Aeon's Strike Force Badge", href: "https://homecoming.wiki/wiki/Master_of_Dr._Aeon%27s_Strike_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-dr-aeons-strike-force.png"}
    ],
};
