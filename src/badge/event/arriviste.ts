import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Arriviste: IBadgeData = {
    type: BadgeType.EVENT,
    key: "arriviste",
    setTitleId: 1771,
    names: [
        {value: "Arriviste"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/arriviste.png"}],
    badgeText: [
        {type: Alternate.H, value: "Selling the Malleus Mundi to the highest bidder is a choice that may come back to haunt you."},
        {type: Alternate.V, value: "You never knew that a simple unreadable book could fetch such a price."}
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Sell the Malleus Mundi to the highest bidder' (Villains).",
    links: [
        {title: "Arriviste Badge", href: "https://paragonwiki.com/wiki/Arriviste_Badge"},
        {title: "Whispered Rumour", href: "https://paragonwiki.com/wiki/Mission:Tip_-_Whispered_Rumor"}
    ]
};
