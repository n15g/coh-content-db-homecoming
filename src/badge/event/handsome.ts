import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Handsome: IBadgeData = {
    type: BadgeType.EVENT,
    key: "handsome",
    setTitleId: 527,
    names: [
        {type: Alternate.M, value: "Handsome"},
        {type: Alternate.F, value: "Beautiful"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Eros can bring out the beauty in any being"}
    ],
    acquisition: "This badge is awarded for receiving mission completion rewards for both retrieving the Girdle of Aphrodite for Ganymede" +
        " and destroying the mystical cauldron for Scratch once during a Valentine's Day Event.",
    links: [
        {title: "Handsome Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Handsome_Badge"},
        {title: "Beautiful Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Beautiful_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/handsome.png"}]
};
