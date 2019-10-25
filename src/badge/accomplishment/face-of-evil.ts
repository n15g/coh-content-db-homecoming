import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const FaceOfEvil: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "face-of-evil",
    setTitleId: 2019,
    names: [
        {value: "Face of Evil"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You gained control of the Hearts of Darkness and defeated an ancient evil bent on consuming " +
        "your soul."}
    ],
    acquisition: "Complete the Level 15-19 Ongoing Training story arc from Dr. Graves",
    links: [
        {title: "Face Of Evil Badge", href: "https://paragonwiki.com/wiki/Face_Of_Evil_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/face-of-evil.png"}
    ],
};
