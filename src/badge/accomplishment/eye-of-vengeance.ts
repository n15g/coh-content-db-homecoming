import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const EyeOfVengeance: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "eye-of-vengeance",
    setTitleId: 2188,
    names: [
        {value: "Eye of Vengeance"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You fought the Knives of Vengeance within Dark Astoria and discovered that they plan to hunt " +
                "down and kill whoever they deem 'worthy' for their justice. It appears that, coincidentally, " +
                "that's just about everyone on Primal Earth."
        }
    ],
    acquisition: "Complete the story arc from Heather Townshend",
    links: [
        {title: "Eye of Vengeance Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Eye_of_Vengeance_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};
