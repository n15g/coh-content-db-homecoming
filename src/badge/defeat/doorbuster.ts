import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Doorbuster: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "doorbuster",
    setTitleId: 2091,
    names: [
        {value: "Doorbuster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "No magical or mechanical barrier can keep you contained."}
    ],
    acquisition: "Destroy 100 Force Field Doors, Magical Barriers or Reinforced doors",
    links: [
        {title: "Doorbuster Badge", href: "https://paragonwiki.com/wiki/Doorbuster_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/doorbuster.png"}
    ],
};
