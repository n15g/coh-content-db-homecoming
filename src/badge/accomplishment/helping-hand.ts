import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const HelpingHand: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "helping-hand",
    names: [
        {value: "Helping Hand"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You've helped to solve the Medi-Porter crisis in Paragon and get the devices distributed to " +
        "those who need them."}
    ],
    acquisition: "Complete the story arc from Roy Cooling",
    links: [
        {title: "Helping Hand Badge", href: "https://paragonwiki.com/wiki/Helping_Hand_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/helping-hand.png"}
    ],
};