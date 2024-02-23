import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KeeperOfBeasts: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "keeper-of-beasts",
    setTitleId: 2214,
    names: [
        {value: "Keeper of Beasts"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Vicious though they might seem, the beasts of the Spirit Stalkers proved no match for you. You " +
                "defeated many members of the Spirit Stalkers to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Spirit Stalkers",
    links: [
        {title: "Keeper of Beasts Badge", href: "https://homecoming.wiki/wiki/Keeper_of_Beasts_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/keeper-of-beasts.png"}
    ],
};
