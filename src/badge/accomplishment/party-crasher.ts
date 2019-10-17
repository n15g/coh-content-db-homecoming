import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const PartyCrasher: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "party-crasher",
    names: [
        {value: "Party Crasher"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You crashed a rave and stole a piece of the alloy which makes up Silver Mantis' armor."}
    ],
    acquisition: "Complete the Steal Alloy from Silver Mantis mission from Dr. Forrester",
    links: [
        {title: "Party Crasher Badge", href: "https://paragonwiki.com/wiki/Party_Crasher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png"}
    ],
};