import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SwiftSteel: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "swift-steel",
    names: [
        {value: "Swift Steel"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Obedience is a virtue."}
    ],
    acquisition: "Defeat 300 Ancestor Spirits (Tsoo)",
    links: [
        {title: "Swift Steel Badge", href: "https://paragonwiki.com/wiki/Swift_Steel_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};