import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FortunataSeer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "fortunata-seer",
    setTitleId: 443,
    names: [
        {value: "Fortunata Seer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The seers see victory on your side."}
    ],
    acquisition: "Defeat 100 Fortunata Seers (Arachnos)",
    links: [
        {title: "Fortunata Seer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Fortunata_Seer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
