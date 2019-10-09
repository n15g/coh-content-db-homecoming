import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Veiled: IBadgeData = {
    type: BadgeType.EVENT,
    key: "veiled",
    names: [
        {value: "Veiled"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have done your best to hide the Malleus Mundi in a place where it can never be found."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Hide the Malleus Mundi'.",
    links: [
        {title: "Veiled Badge", href: "https://paragonwiki.com/wiki/Veiled_Badge"},
        {title: "Whispered Rumour", href: "https://paragonwiki.com/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "core.event.veiled"}]
};
