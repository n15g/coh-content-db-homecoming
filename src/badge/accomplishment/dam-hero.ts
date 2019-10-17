import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const DamHero: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "dam-hero",
    setTitleId: 1590,
    names: [
        {type: Alternate.H, value: "Dam Hero"},
        {type: Alternate.V, value: "Dam Villain"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: "You've saved Faultline from not one, but three separate villain groups intent on using the dam " +
        "to cause carnage on a massive scale."},
        {type: Alternate.V, value: "You've saved Faultline from not one, but three separate villain groups intent on using the dam " +
        "to cause carnage on a massive scale. Perhaps one day you'll finish what they started."}
    ],
    acquisition: "Complete the second part of the new Positron Task Force",
    links: [
        {title: "Dam Hero Badge", href: "https://paragonwiki.com/wiki/Dam_Hero_Badge"},
        {title: "Dam Villain Badge", href: "https://paragonwiki.com/wiki/Dam_Villain_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dam-hero.png"}
    ],
};