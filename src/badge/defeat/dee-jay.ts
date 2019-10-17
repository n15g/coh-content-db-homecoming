import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const DeeJay: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "dee-jay",
    setTitleId: 219,
    names: [
        {value: "Dee Jay"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have defeated the enraged Trolls, hopped up on Superadine during their nightly rave."}
    ],
    acquisition: "Defeat 50 Supa Trolls during a Troll Rave",
    links: [
        {title: "Dee Jay Badge", href: "https://paragonwiki.com/wiki/Dee_Jay_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/dee-jay.png"}
    ],
};