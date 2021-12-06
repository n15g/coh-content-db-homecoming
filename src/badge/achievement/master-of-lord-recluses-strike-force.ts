import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfLordReclusesStrikeForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-lord-recluses-strike-force",
    setTitleId: 945,
    names: [
        {value: "Master of Lord Recluse's Strike Force"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have proven yourself Master of Lord Recluse's Strike Force."}
    ],
    acquisition: `Complete the Master of Lord Recluse's Strike Force challenge (zero deaths, temporary and incarnate powers disabled)`,
    links: [
        {title: "Master of Lord Recluse's Strike Force Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Master_of_Lord_Recluse%27s_Strike_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-lord-recluses-strike-force.png"}
    ],
};
