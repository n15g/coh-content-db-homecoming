import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const UnholyCoven: IBadgeData = {
    type: BadgeType.EVENT,
    key: "unholy-coven",
    setTitleId: 2506,
    names: [
        {value: "Unholy Coven"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 5 crone matriarchs, these ancient witches lead the Coven from the deep shadows, practicing forbidden sorcery unseen by the world.`},
    ],
    acquisition: `Defeat 5 Crone Matriarchs during the Halloween event.`,
	notes: `This badge rewards 2 prismatic aether particles.`,
    links: [
        {title: "Unholy Coven Badge", href: "https://homecoming.wiki/wiki/Unholy_Coven_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/unholy-coven.png"}]
};