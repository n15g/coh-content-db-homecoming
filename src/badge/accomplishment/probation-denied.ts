import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const ProbationDenied: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "probation-denied",
    setTitleId: 2320,
    names: [
        {value: "Probation Denied"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You stopped a number of prisoners from escaping from Ziggursky prison."}
    ],
    acquisition: "Complete the Prison Break zone event in Brickstown",
    links: [
        {title: "Probation Denied Badge", href: "https://paragonwiki.com/wiki/Probation_Denied_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-arc.png"}
    ],
};
