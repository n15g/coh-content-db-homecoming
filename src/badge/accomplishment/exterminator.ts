import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const Exterminator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "exterminator",
    setTitleId: 341,
    names: [
        {value: "Exterminator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "The Rikti are like vermin. Good thing you were around to clean 'em out."}
    ],
    acquisition: "Complete the Eliminate Kit'Vul mission from Timothy Raymond",
    links: [
        {title: "Exterminator Badge", href: "https://paragonwiki.com/wiki/Exterminator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png"}
    ],
};
