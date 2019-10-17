import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tracer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "tracer",
    setTitleId: 54,
    names: [
        {value: "Tracer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proven yourself a person who can track down anyone, even those with the ability to " +
        "teleport."}
    ],
    acquisition: "Defeat 200 Tsoo sorcerers",
    links: [
        {title: "Tracer Badge", href: "https://paragonwiki.com/wiki/Tracer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/tracer.png"}
    ],
};