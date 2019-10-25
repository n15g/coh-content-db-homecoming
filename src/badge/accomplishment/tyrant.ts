import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Tyrant: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "tyrant",
    setTitleId: 2354,
    names: [
        {value: "Tyrant"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You ruthlessly took advantage of the Praetorian Loyalists in your pursuit of power, fame, and glory.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png"}],
    acquisition: "Complete every story arc in the Praetorian Power storyline to earn this badge.",
    links: [
        {title: "Tyrant Badge", href: "https://paragonwiki.com/wiki/Tyrant_Badge"}
    ],
};
