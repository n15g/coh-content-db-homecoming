import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Veiled: IBadgeData = {
    type: BadgeType.EVENT,
    key: "veiled",
    setTitleId: 1770,
    names: [
        {value: "Veiled"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have done your best to hide the Malleus Mundi in a place where it can never be found."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Hide the Malleus Mundi'.",
    links: [
        {title: "Veiled Badge", href: "https://homecoming.wiki/wiki/Veiled_Badge"},
        {title: "Whispered Rumour", href: "https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/veiled.png"}]
};
