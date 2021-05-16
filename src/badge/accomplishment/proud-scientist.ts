import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ProudScientist: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "proud-scientist",
    setTitleId: 2273,
    names: [
        {value: "Proud Scientist"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You played Anti-Matter's personal story and witnessed his last moments."}
    ],
    acquisition: "Complete the personal story from Anti-Matter",
    links: [
        {title: "Proud Scientist Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Proud_Scientist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/proud-scientist.png"}
    ],
};
