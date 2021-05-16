import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Laureate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "laureate",
    setTitleId: 1441,
    names: [
        {value: "Laureate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have no idea what that Lucan thing was, but he will haunt your dreams forever."}
    ],
    acquisition: "Complete the The Great Escape zone event in Neutropolis",
    links: [
        {title: "Laureate Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Laureate_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/laureate.png"}
    ],
};
