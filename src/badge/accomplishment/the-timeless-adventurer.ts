import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TheTimelessAdventurer: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "the-timeless-adventurer",
    setTitleId: 2192,
    names: [
        {value: "The Timeless Adventurer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You travelled back to Cimerora and saved their civilization from certain destruction by the " +
                "Talons of Vengeance, though you wonder if you only prolonged the inevitable, given that " +
                "Cimerora is a lost civilization."
        }
    ],
    acquisition: "Complete the story arc from Sister Solaris",
    links: [
        {title: "The Timeless Adventurer Badge", href: "https://homecoming.wiki/wiki/The_Timeless_Adventurer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png"}
    ],
};
