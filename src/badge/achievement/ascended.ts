import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Ascended: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "ascended",
    setTitleId: 1462,
    names: [
        {value: "Ascended"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "Despite your villainous beginnings you managed to redeem yourself. You have shifted your " +
                "alignment from Villain to Hero earning yourself the Ascended badge."
        }
    ],
    acquisition: "Shift alignment from Villain to Hero",
    links: [
        {title: "Ascended Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ascended_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ascended.png"}
    ],
};
