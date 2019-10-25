import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Trusting: IBadgeData = {
    type: BadgeType.EVENT,
    key: "trusting",
    setTitleId: 1772,
    names: [
        {value: "Trusting"},
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: "You've handed the Malleus Mundi over to MAGI for safekeeping. You Hope."}],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Send the Malleus Mundi to MAGI' (Heroes)'.",
    links: [
        {title: "Trusting Badge", href: "https://paragonwiki.com/wiki/Trusting_Badge"},
        {title: "Whispered Rumour", href: "https://paragonwiki.com/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/trusting.png"}]
};
