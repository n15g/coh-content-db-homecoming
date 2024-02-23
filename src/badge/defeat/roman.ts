import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Roman: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "roman",
    setTitleId: 995,
    names: [
        {value: "Roman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You've defeated the great usurper, Romulus Augustus, first to merge with Nictus aliens. With " +
                "his defeat, you've thwarted his plans to build temporal strongholds throughout time and space."
        }
    ],
    acquisition: "Defeat Nictus Romulus, a villain in the Imperious Task Force",
    links: [
        {title: "Roman Badge", href: "https://homecoming.wiki/wiki/Roman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/roman.png"}
    ],
};
