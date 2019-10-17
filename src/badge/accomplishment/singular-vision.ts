import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const SingularVision: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "singular-vision",
    names: [
        {value: "Singular Vision"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You've prevented Protean from carrying out his plot for a Praetorian invasion, but not without " +
        "a heavy cost - the death of your alternate self."}
    ],
    acquisition: "Complete the story arc from Special Agent Jenni Adair",
    links: [
        {title: "Singular Vision Badge", href: "https://paragonwiki.com/wiki/Singular_Vision_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/singular-vision.png"}
    ],
};