import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Trusting: IBadgeData = {
    type: BadgeType.EVENT,
    key: "trusting",
    setTitleId: 1772,
    names: [
        {value: "Trusting"},
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You've handed the Malleus Mundi over to MAGI for safekeeping. You Hope."},
        {type: Alternate.V, value: "Unfortunately MAGI didn't hold onto the Malleus Mundi for long, or you'd know just where to make a quick score."}
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Send the Malleus Mundi to MAGI' (Heroes).",
    links: [
        {title: "Trusting Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Trusting_Badge"},
        {title: "Whispered Rumour", href: "https://hcwiki.cityofheroes.dev/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/trusting.png"}]
};
