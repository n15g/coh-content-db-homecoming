import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Gunner: IBadgeData = {
    type: BadgeType.PVP,
    key: "gunner",
    setTitleId: 370,
    names: [
        {value: "Gunner"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have been part of taking over a Firebase, earning you a new nickname: 'Gunner.'"}
    ],
    acquisition: "Deactivate a firebase in Bloody Bay",
    links: [
        {title: "Gunner Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gunner_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/gunner.png"}
    ],
};
