import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Frostbitten: IBadgeData = {
    type: BadgeType.EVENT,
    key: "frostbitten",
    setTitleId: 1056,
    names: [
        {value: "Frostbitten"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: "You have spent time in Paragon City during the winter and have felt winter's bite."},
        {type: Alternate.V, value: "You have spent time in Rogue Isles during the winter and have felt winter's bite."}
    ],
    acquisition: "Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.",
    links: [
        {title: "Frostbitten Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Frostbitten_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frostbitten.png"}]
};
