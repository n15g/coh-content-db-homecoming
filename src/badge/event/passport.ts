import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Passport: IBadgeData = {
    type: BadgeType.EVENT,
    key: "passport",
    names: [
        {value: "Passport"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Your travels have taken you to mysterious and exotic places. You have faced many dangers, but now you have returned to the place you call home."},
    ],
    acquisition: "This badge was awarded on the European servers for accounts that transferred at least one character from a US server.",
    notes: "Quite likely no longer possible to acquire, and will probably be re-purposed on Homecoming in the future.",
    links: [
        {title: "Passport Badge", href: "https://paragonwiki.com/wiki/Passport_Badge"}
    ],
    imageKeys: [{value: "core.event.passport"}]
};
