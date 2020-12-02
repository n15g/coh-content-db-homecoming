import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Visionary: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "visionary",
    setTitleId: 204,
    names: [
        {value: "Visionary"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have been successful in a campaign to blind the Overseers in the Shadow Shard."}
    ],
    acquisition: "Defeat 500 points worth of Rularuu Sentries (Watchers and Observers are worth 1 point, Overseers are worth 5 points).",
    links: [
        {title: "Visionary Badge", href: "https://paragonwiki.com/wiki/Visionary_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/visionary.png"}
    ],
};
