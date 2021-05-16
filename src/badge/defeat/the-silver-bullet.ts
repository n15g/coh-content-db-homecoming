import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheSilverBullet: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "the-silver-bullet",
    setTitleId: 34,
    names: [
        {value: "The Silver Bullet"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Warwolves have a nickname for you: The Silver Bullet."}
    ],
    acquisition: "Defeat 200 Council Warwolves",
    links: [
        {title: "The Silver Bullet Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Silver_Bullet_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council.png"}
    ],
};
