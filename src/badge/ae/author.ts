import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Author: IBadgeData = {
    type: BadgeType.AE,
    key: "author",
    names: [
        {value: "Author"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've earned the Author badge from having another player experience your published Mission Architect Story Arc! This badge is awarded to all characters on your account."}],
    acquisition: "Another player has completed your published arc. (Account-wide)",
    links: [
        {title: "Author Badge", href: "https://paragonwiki.com/wiki/Author_Badge"}
    ],
    imageKeys: [{value: "core.ae.author"}]
};
