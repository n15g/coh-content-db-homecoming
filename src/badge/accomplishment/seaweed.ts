import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Seaweed: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "seaweed",
    setTitleId: 335,
    names: [
        {value: "Seaweed"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Sea Witch won't be bothering you anymore."}
    ],
    acquisition: "Complete the Take Down Sea Witch mission from the Lorenz Ansaldo",
    links: [
        {title: "Seaweed Badge", href: "https://homecoming.wiki/wiki/Seaweed_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-3.png"}
    ],
};
