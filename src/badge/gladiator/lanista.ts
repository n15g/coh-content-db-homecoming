import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Lanista: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "lanista",
    setTitleId: 473,
    names: [
        {value: "Lanista"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have won your first rated creature battle in the Arena!"}
    ],
    acquisition: "Win one Gladiator match in the Arena (Arena)",
    links: [
        {title: "Lanista Badge", href: "https://homecoming.wiki/wiki/Lanista_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
