import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Pyromaniac: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pyromaniac",
    names: [
        {value: "Pyromaniac"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You set fire to one of the nicer parts of Faultline while Penelope Yin and Penelope Mayhem " +
        "were still fighting elsewhere."}
    ],
    acquisition: "Arm all five bombs before Penelope Yin and Penelope Mayhem finish their fight in the fourth mission of the third story arc from Mr. G (Primal Earth)",
    links: [
        {title: "Pyromaniac Badge", href: "https://paragonwiki.com/wiki/Pyromaniac_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png"}
    ],
};