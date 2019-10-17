import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Protectorate: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "protectorate",
    setTitleId: 43,
    names: [
        {type: Alternate.H, value: "Protectorate"},
        {type: Alternate.V, value: "Devourer of Earth"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have shown that you can protect the world from the energy sapping emanators used by the " +
        "Devouring Earth."}
    ],
    acquisition: "Defeat 100 Devouring Earth emanators",
    links: [
        {title: "Protectorate Badge", href: "https://paragonwiki.com/wiki/Protectorate_Badge"},
        {title: "Devourer of Earth Badge", href: "https://paragonwiki.com/wiki/Devourer_of_Earth_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png"}
    ],
};