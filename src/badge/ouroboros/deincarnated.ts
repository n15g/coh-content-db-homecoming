import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Deincarnated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "deincarnated",
    setTitleId: 2475,
    names: [
        {value: "Deincarnated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You have completed a Flashback at level 50 while not using any Incarnate Powers.`}
    ],
    acquisition: `Complete a Flashback at level 50 without using any Incarnate Powers.`,
    links: [
        {title: "Deincarnated Badge", href: "https://homecoming.wiki/wiki/Deincarnated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/deincarnated.png"}]
};
