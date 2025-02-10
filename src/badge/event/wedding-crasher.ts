import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WeddingCrasher: IBadgeData = {
    type: BadgeType.EVENT,
    key: "wedding-crasher",
    setTitleId: 2548,
    names: [
        {value: "Wedding Crasher"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `Opportunities like this don't come often! You took the chance to go back in time and help Lord Recluse crash Manticore & Sister Psyche's wedding, getting the drop on both the Freedom Phalanx and the heroes in attendance.`},
    ],
    acquisition: `Stand with Arachnos during Manticor and Sister Psyche's wedding.`,
    links: [
        {title: "Wedding Crasher", href: "https://homecoming.wiki/wiki/Wedding_Crasher_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/wedding-crasher.png"}]
};
