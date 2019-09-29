import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ToyCollector: IBadgeData = {
    type: BadgeType.EVENT,
    key: "toy-collector",
    names: [
        {value: "Toy Collector"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have amassed a vast collection of holiday gifts!"},
    ],
    acquisition: "Open a total of 200 presents spread throughout Paragon City and the Rogue Isles during the Winter Event.",
    links: [
        {title: "Toy Collector Badge", href: "https://paragonwiki.com/wiki/Toy_Collector_Badge"}
    ],
    imageKeys: [{value: "core.event.toy-collector"}]
};
