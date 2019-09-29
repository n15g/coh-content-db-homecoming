import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Trusting: IBadgeData = {
    type: BadgeType.EVENT,
    key: "trusting",
    names: [
        {type: Alternate.H, value: "Trusting"},
        {type: Alternate.V, value: "Arriviste"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You've handed the Malleus Mundi over to MAGI for safekeeping. You Hope."},
        {type: Alternate.H, value: "Selling the Malleus Mundi to the highest bidder is a choice that may come back to haunt you."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Send the Malleus Mundi to MAGI' (Heroes)'" +
        " or 'Sell the Malleus Mundi to the highest bidder' (Villains).",
    links: [
        {title: "Trusting Badge", href: "https://paragonwiki.com/wiki/Trusting_Badge"},
        {title: "Arriviste Badge", href: "https://paragonwiki.com/wiki/Arriviste_Badge"},
        {title: "Whispered Rumour", href: "https://paragonwiki.com/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    imageKeys: [{value: "core.event.trusting"}]
};
