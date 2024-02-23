import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Secured: IBadgeData = {
    type: BadgeType.EVENT,
    key: "secured",
    setTitleId: 1767,
    names: [
        {value: "Secured"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have kept the Malleus Mundi secure the best way you know how, by securing it yourself."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Keep the Malleus Mundi secure'.",
    links: [
        {title: "Secured Badge", href: "https://homecoming.wiki/wiki/Secured_Badge"},
        {title: "Whispered Rumour", href: "https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/secured.png"}]
};
