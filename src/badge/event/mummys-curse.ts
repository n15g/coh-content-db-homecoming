import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MummysCurse: IBadgeData = {
    type: BadgeType.EVENT,
    key: "mummys-curse",
    setTitleId: 2505,
    names: [
        {value: "Mummy's Curse"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 5 arisen mummies, ancient embalmed zombies who had returned to life to seek their vengeance against tomb robbers.`},
    ],
    acquisition: `Defeat 5 Arisen Mummies during the Halloween event.`,
	notes: `This badge rewards 2 prismatic aether particles.`,
    links: [
        {title: "Mummy's Curse Badge", href: "https://homecoming.wiki/wiki/Mummy%27s_Curse_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mummys-curse.png"}]
};