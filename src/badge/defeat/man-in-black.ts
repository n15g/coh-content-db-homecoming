import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ManInBlack: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "man-in-black",
    setTitleId: 312,
    names: [
        {type: Alternate.M, value: "Man in Black"},
        {type: Alternate.F, value: "Woman in Black"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "These creepy alien parasites are no match for you."}
    ],
    acquisition: "Defeat 200 Shivans",
    links: [
        {title: "Man in Black Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Man_in_Black_Badge"},
        {title: "Woman in Black Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Woman_in_Black_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/man-in-black.png"}
    ],
};
