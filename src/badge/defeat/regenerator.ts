import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Regenerator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "regenerator",
    setTitleId: 53,
    names: [
        {value: "Regenerator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have shown tenaciousness in taking down the leadership of the Trolls... over and over " +
                "again."
        }
    ],
    acquisition: "Defeat 100 Trolls bosses",
    links: [
        {title: "Regenerator Badge", href: "https://homecoming.wiki/wiki/Regenerator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/regenerator.png"}
    ],
};
