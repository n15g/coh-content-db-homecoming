import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MarkedForDeath: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "marked-for-death",
    setTitleId: 1470,
    names: [
        {value: "Marked for Death"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "The Syndicate has marked you for death, but if they're smart they won't get anywhere near you. " +
                "You defeated several Syndicate members to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Syndicate",
    links: [
        {title: "Marked for Death Badge", href: "https://homecoming.wiki/wiki/Marked_for_Death_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/marked-for-death.png"}
    ],
};
