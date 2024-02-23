import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MuGuardian: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "mu-guardian",
    setTitleId: 442,
    names: [
        {value: "Mu Guardian"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "These mystics are intrigued by you."}
    ],
    acquisition: "Defeat 100 Mu Guardians (Arachnos)",
    links: [
        {title: "Mu Guardian Badge", href: "https://homecoming.wiki/wiki/Mu_Guardian_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
