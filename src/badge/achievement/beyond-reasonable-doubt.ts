import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const BeyondReasonableDoubt: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "beyond-reasonable-doubt",
    setTitleId: 2408,
    names: [
        {value: "Beyond Reasonable Doubt"}
    ],
    alignment: ALIGNMENT_HERO,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/beyond-reasonable-doubt.png"}],
    badgeText: [
        {value: "It is better that ten guilty persons escape than that one innocent suffer."}
    ],
    acquisition: "Spare Rider in the story arc `Dirty Work` from Shauna Braun (Level 25-29, Arc 26.01 in Ouro, Vigilante)",
    links: [
        {title: "Beyond Reasonable Doubt Badge", href: "https://homecoming.wiki/wiki/Beyond_Reasonable_Doubt_Badge"}
    ],
};
