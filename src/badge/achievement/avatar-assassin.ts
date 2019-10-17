import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AvatarAssassin: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "avatar-assassin",
    setTitleId: 1999,
    names: [
        {value: "Avatar Assassin"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You took a risk and managed to defeat the Avatar of Hamidon in the Underground at the same " +
        "time a Detonating Seedling was about to go off."}
    ],
    acquisition: "Defeat the Avatar of Hamidon at the same time as a Detonating Seedling in The Underground Trial",
    links: [
        {title: "Avatar Assassin Badge", href: "https://paragonwiki.com/wiki/Avatar_Assassin_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png"}
    ],
};