import {ALIGNMENT_PRAETORIAN, BadgeType, IBadgeData} from "coh-content-db";

export const MoralHighGround: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "moral-high-ground",
    setTitleId: 1423,
    names: [
        {value: "Moral High Ground"}
    ],
    alignment: ALIGNMENT_PRAETORIAN,
    badgeText: [
        {value: "You've decided to ally yourself with either the Praetorian Resistance or the Praetorian " +
        "Loyalists on five separate occassions. Regardless of where your true morals lie, you've proven " +
        "willing to defend your positions."}
    ],
    acquisition: "Choose Loyalist or Resistance morality five times",
    links: [
        {title: "Moral High Ground Badge", href: "https://paragonwiki.com/wiki/Moral_High_Ground_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/moral-high-ground.png"}
    ],
};