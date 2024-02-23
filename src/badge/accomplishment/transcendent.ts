import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Transcendent: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "transcendent",
    setTitleId: 70,
    names: [
        {value: "Transcendent"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You have become the master of the mystical gateway beneath the Hollows."}
    ],
    acquisition: "Complete the The Cavern of Transcendence Trial",
    links: [
        {title: "Transcendent Badge", href: "https://homecoming.wiki/wiki/Transcendent_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/trial-1.png"}
    ],
};
