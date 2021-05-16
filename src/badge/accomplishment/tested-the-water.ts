import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const TestedTheWater: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tested-the-water",
    setTitleId: 1425,
    names: [
        {value: "Tested the Water"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            type: Alternate.H, value: "You're not quick to pass judgment on others, but will step in when things stray off course.  " +
                "You earned this badge by helping someone complete an Alignment Mission that is not the same as " +
                "your current alignment."
        },
        {type: Alternate.V, value: "You're willing to work with just about anybody if the pay is good enough."}
    ],
    acquisition: "Help someone complete an Alignment mission that is different from your current alignment",
    links: [
        {title: "Tested the Water Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Tested_the_Water_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tested-the-water-h.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/tested-the-water-v.png"}
    ],
};
