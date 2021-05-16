import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const GiftGetter: IBadgeData = {
    type: BadgeType.EVENT,
    key: "gift-getter",
    setTitleId: 2089,
    names: [
        {value: "Gift Getter"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've received a copy of the mysterious Duplicating Gift from another! Don't forget to pass it on!"},
    ],
    acquisition: "Receive a Duplicating Gift from another player when you don't already have one during the Winter event.",
    links: [
        {title: "Gift Getter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Gift_Getter_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gift-getter.png"}]
};
