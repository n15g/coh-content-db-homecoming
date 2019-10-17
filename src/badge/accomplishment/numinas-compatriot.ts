import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const NuminasCompatriot: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "numinas-compatriot",
    setTitleId: 66,
    names: [
        {type: Alternate.H, value: "Numina's Compatriot"},
        {type: Alternate.V, value: "Numina's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "Numina and the spirit of the Woodsman were pleased to present you with this medal."},
        {type: Alternate.V, value: "Numina and the spirit of the Woodsman are disappointed in you, but hope that one day you will " +
        "return to the side of justice."}
    ],
    acquisition: "Complete the Numina Task Force: Soul of the Woodsman",
    links: [
        {title: "Numina's Compatriot Badge", href: "https://paragonwiki.com/wiki/Numina%27s_Compatriot_Badge"},
        {title: "Numina's Betrayer Badge", href: "https://paragonwiki.com/wiki/Numina%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/numinas-compatriot.png"}
    ],
};