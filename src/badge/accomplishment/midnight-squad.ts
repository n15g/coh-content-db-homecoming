import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MidnightSquad: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "midnight-squad",
    setTitleId: 987,
    names: [
        {value: "Midnight Squad"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have proven yourself a worthy ally to the secretive order of mystics, magicians and " +
        "scholars known as the Midnight Squad. Because of this, they have granted you access to their " +
        "exclusive Midnighter Club."}
    ],
    acquisition: "Complete the Lost and Found story arc from Montague Castanella, or visit the House Hunter exploration badge",
    links: [
        {title: "Midnight Squad Badge", href: "https://paragonwiki.com/wiki/Midnight_Squad_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/midnight-squad.png"}
    ],
};