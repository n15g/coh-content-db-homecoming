import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const GroupFounder: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "group-founder",
    setTitleId: 2255,
    names: [
        {value: "Group Founder"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You helped Provost Marchand form the New Praetorians."}
    ],
    acquisition: "Complete the first story arc from Provost Marchand (Primal Earth)",
    links: [
        {title: "Group Founder Badge", href: "https://homecoming.wiki/wiki/Group_Founder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png"}
    ],
};
