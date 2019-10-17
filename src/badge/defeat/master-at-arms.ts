import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MasterAtArms: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "master-at-arms",
    setTitleId: 854,
    names: [
        {value: "Master at Arms"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have defeated the Rikti Master At Arms from the crashed ship in Rikti War Zone."}
    ],
    acquisition: "Defeat the Rikti Master at Arms U'Kon Gr'ai 10 times during Rikti Ship Raids",
    links: [
        {title: "Master at Arms Badge", href: "https://paragonwiki.com/wiki/Master_At_Arms_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/master-at-arms.png"}
    ],
};