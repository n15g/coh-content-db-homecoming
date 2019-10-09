import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Arriviste: IBadgeData = {
    type: BadgeType.EVENT,
    key: "arriviste",
    names: [
        {value: "Arriviste"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [{value: "Selling the Malleus Mundi to the highest bidder is a choice that may come back to haunt you."}],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Sell the Malleus Mundi to the highest bidder'.",
    links: [
        {title: "Arriviste Badge", href: "https://paragonwiki.com/wiki/Arriviste_Badge"},
        {title: "Whispered Rumour", href: "https://paragonwiki.com/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "core.event.trusting"}]
};
