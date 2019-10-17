import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const BombSpecialist: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "bomb-specialist",
    setTitleId: 834,
    names: [
        {value: "Bomb Specialist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have disarmed 25 unexploded bombs."}
    ],
    acquisition: "Destroy 25 unexploded Bombs (UXBs) during a Rikti World Invasion",
    links: [
        {title: "Bomb Specialist Badge", href: "https://paragonwiki.com/wiki/Bomb_Specialist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/new-rikti.png"}
    ],
};
