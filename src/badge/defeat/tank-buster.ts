import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TankBuster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "tank-buster",
    setTitleId: 46,
    names: [
        {value: "Tank Buster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proved your worth on the streets, and the Freakshow have learned to fear your name."}
    ],
    acquisition: "Defeat 100 Freakshow tanks",
    notes: "This is one of the badges needed to unlock Viridian as a contact for villains level 45-50.",
    links: [
        {title: "Tank Buster Badge", href: "https://paragonwiki.com/wiki/Tank_Buster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/tank-buster.png"}
    ],
};
