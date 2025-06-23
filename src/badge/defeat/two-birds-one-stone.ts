import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TwoBirdsOneStone: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "two-birds-one-stone",
    setTitleId: 2508,
    names: [
        {value: "Two Birds, One Stone"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `When the Blackwing Industries private military company was contracted to protect Kallisti Wharf, you weren't sure what to expect.
Now, having faced their advanced armor, weapons, and training yourself, there's no doubt that the security of Kallisti Wharf is in capable hands.`
        }
    ],
    acquisition: "Defeat 250 Blackwing Industries enemies.",
    links: [
        {title: 'Two Birds One, Stone Badge', href: 'https://homecoming.wiki/wiki/Two_Birds_One_Stone_Badge'},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/two-birds-one-stone.png"}
    ],
};
