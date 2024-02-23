import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Fabled: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "fabled",
    setTitleId: 2469,
    names: [
        {value: "Fabled"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have defeated 100 Cyclopes in Cimerora.`}
    ],
    acquisition: `Defeat 100 Cyclopes in Cimerora.`,
    links: [
        {title: "Fabled Badge", href: "https://homecoming.wiki/wiki/Fabled_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/fabled.png"}
    ],
};
