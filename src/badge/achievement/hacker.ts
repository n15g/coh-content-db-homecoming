import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hacker: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "hacker",
    setTitleId: 1761,
    names: [
        {value: "Hacker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You managed to destroy the War Walkers within the secret Praetorian warehouse before the " +
                "security team could be activated."
        }
    ],
    acquisition: "Click all 8 devices within 30 seconds of entering the warehouse in the first mission of the Tin Mage Mark II Task Force",
    links: [
        {title: "Hacker Badge", href: "https://homecoming.wiki/wiki/Hacker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png"}
    ],
};
