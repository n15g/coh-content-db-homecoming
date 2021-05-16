import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const MentalVoyager: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "mental-voyager",
    setTitleId: 2078,
    names: [
        {value: "Mental Voyager"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have completed the Incarnate Trial: The Minds of Mayhem."}
    ],
    acquisition: "Complete the Minds of Mayhem Trial",
    links: [
        {title: "Mental Voyager Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Mental_Voyager_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mental-voyager.png"}
    ],
};
