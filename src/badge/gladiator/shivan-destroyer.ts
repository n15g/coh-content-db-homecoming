import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ShivanDestroyer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "shivan-destroyer",
    setTitleId: 452,
    names: [
        {value: "Shivan Destroyer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have learned to control the mindless horrors from space."}
    ],
    acquisition: "Earn the [badge:irradiated] Badge (Shivans)",
    links: [
        {title: "Shivan Destroyer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shivan_Destroyer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
