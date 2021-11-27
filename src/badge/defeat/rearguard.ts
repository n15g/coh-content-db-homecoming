import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Rearguard: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "rearguard",
    setTitleId: 2488,
    names: [
        {value: "Rearguard"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've fought past their advanced energy weapons and broken through their enchanted Impervium armor to reach an understanding of why Vanguard truly are one of the most powerful forces on Earth... Aside from you of course.`}
    ],
    acquisition: `Defeat 200 Vanguard Sword or Vanguard Shield.`,
    links: [
        {title: "Rearguard Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Rearguard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/rearguard.png"}
    ],
};