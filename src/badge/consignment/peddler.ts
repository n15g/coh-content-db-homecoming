import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Peddler: IBadgeData = {
    type: BadgeType.CONSIGNMENT,
    key: "peddler",
    names: [
        {value: "Peddler"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You've sold 500 items on the Auction House."},
    ],
    acquisition: "500 total sales of any kind on the consignment houses.",
    links: [
        {title: "Peddler Badge", href: "https://paragonwiki.com/wiki/Peddler_Badge"}
    ],
    imageKeys: [{value: "core.consignment.peddler"}]
};
