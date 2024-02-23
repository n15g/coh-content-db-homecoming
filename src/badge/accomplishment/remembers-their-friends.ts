import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const RemembersTheirFriends: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "remembers-their-friends",
    setTitleId: 2268,
    names: [
        {value: "Remembers Their Friends"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "Vincent Ross was kidnapped by the Family after they found out he had past dealings with you. " +
                "However, you beat the Family down and rescued Vincent Ross, showing the Rogue Isles that you " +
                "remember your friends."
        }
    ],
    acquisition: "Rescue Vincent Ross in the fourth mission of the second story arc from Mr. G (Primal Earth)",
    links: [
        {title: "Remembers Their Friends Badge", href: "https://homecoming.wiki/wiki/Remembers_Their_Friends_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png"}
    ],
};
