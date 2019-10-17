import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const PPDDeputy: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "ppd-deputy",
    setTitleId: 642,
    names: [
        {type: Alternate.H, value: "PPD Deputy"},
        {type: Alternate.V, value: "Disgraced Deputy"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Paragon Police officials have deputized you for rescuing several of their officers."},
        {type: Alternate.V, value: "Though the Paragon Police you saved owe you one, they will still bring you down on sight."}
    ],
    acquisition: "Save 20 hostage PPD agents in Safeguard Missions",
    links: [
        {title: "PPD Deputy Badge", href: "https://paragonwiki.com/wiki/PPD_Deputy_Badge"},
        {title: "Disgraced Deputy Badge", href: "https://paragonwiki.com/wiki/Disgraced_Deputy_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ppd-deputy.png"}
    ],
};