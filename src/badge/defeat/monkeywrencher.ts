import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Monkeywrencher: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "monkeywrencher",
    setTitleId: 59,
    names: [
        {value: "Monkeywrencher"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have crushed Malta's Zeus Titans, the combination of two damaged Hercules Titan robots."}
    ],
    acquisition: "Defeat 50 Malta Group Zeus Titan robots",
    links: [
        {title: "Monkeywrencher Badge", href: "https://paragonwiki.com/wiki/Monkeywrencher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/malta.png"}
    ],
};