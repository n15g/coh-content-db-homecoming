import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ZetaReticulan: IBadgeData = {
    type: BadgeType.EVENT,
    key: "zeta-reticulan",
    setTitleId: 2527,
    names: [
        {value: "Zeta Reticulan"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've relived the past by defeating 25 of the old school Rikti found during the City of Heroes Anniversary Event.`},
    ],
    acquisition: `Defeat 25 old school Rikti spawned from time capsules during the anniversary event.`,
    links: [
        {title: "Zeta Reticulan Badge", href: "https://homecoming.wiki/wiki/Zeta_Reticulan_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/zeta-reticulan.png"}]
};
