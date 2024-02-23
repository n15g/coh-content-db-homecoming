import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ProtectorOfKindness: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "protector-of-kindness",
    setTitleId: 425,
    names: [
        {type: Alternate.H, value: "Protector of Kindness"},
        {type: Alternate.V, value: "Thorn Crusher"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You saved the being known as Faathim the Kind from capture by the Circle of Thorns."}
    ],
    acquisition: "Complete the Justin Augustine Task Force: The Saga of Faathim",
    links: [
        {title: "Protector of Kindness Badge", href: "https://homecoming.wiki/wiki/Protector_of_Kindness_Badge"},
        {title: "Thorn Crusher Badge", href: "https://homecoming.wiki/wiki/Thorn_Crusher_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/protector-of-kindness.png"}
    ],
};
