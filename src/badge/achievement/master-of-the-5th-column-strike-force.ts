import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MasterOfThe5thColumnStrikeForce: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "master-of-the-5th-column-strike-force",
    setTitleId: 1373,
    names: [
        {value: "Master of the 5th Column Strike Force"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have proven yourself Master of the 5th Column Strike Force"}
    ],
    acquisition: "Successfully complete the Barracuda Strike Force with challenge settings of zero defeats and no Temporary Powers.",
    links: [
        {title: "Master of the 5th Column Strike Force Badge", href: "https://paragonwiki.com/wiki/Master_of_the_5th_Column_Strike_Force_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/master-of-the-5th-column-strike-force.png"}
    ],
};