import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const UndergroundSeeker: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "underground-seeker",
    setTitleId: 1995,
    names: [
        {value: "Underground Seeker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: Underground."}
    ],
    acquisition: "Complete The Underground Trial",
    links: [
        {title: "Underground Seeker Badge", href: "https://homecoming.wiki/wiki/Underground_Seeker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underground-seeker.png"}
    ],
};
