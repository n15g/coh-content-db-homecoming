import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Castigator: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "castigator",
    setTitleId: 2173,
    names: [
        {value: "Castigator"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have punished the servants of fury for going too far in their pursuit of vengeance."}
    ],
    acquisition: "Defeat 100 points worth of Incarnate-level Talons of Vengeance",
    links: [
        {title: "Castigator Badge", href: "https://paragonwiki.com/wiki/Castigator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/castigator.png"}
    ],
};