import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WhipCracker: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "whip-cracker",
    setTitleId: 1436,
    names: [
        {value: "Whip Cracker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You defeated Desdemona and her demons, however you saw a glimmer of good within her heart. " +
        "Perhaps there's hope for her yet."},
        {type: Alternate.V, value: "Desdemona was no match for you. Her will was weak, and she appeared to have second thoughts on " +
        "being a villain."}
    ],
    acquisition: "Defeat Desdemona in an Alignment Mission or a Morality Mission",
    links: [
        {title: "Whip Cracker Badge", href: "https://paragonwiki.com/wiki/Whip_Cracker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/whip-cracker.png"}
    ],
};