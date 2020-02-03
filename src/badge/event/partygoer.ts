import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Partygoer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "partygoer",
    setTitleId: 736,
    names: [
        {value: "Partygoer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've celebrated the one year anniversary of Pocket D by participating in DJ Zero's recreation of the inaugural Spring Fling."},
    ],
    acquisition: "Complete DJ Zero's mission once during a Valentine's Day Event.",
    links: [
        {title: "Partygoer Badge", href: "https://paragonwiki.com/wiki/Partygoer_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/partygoer.png"}]
};
