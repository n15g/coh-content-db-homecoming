import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Magistrate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "magistrate",
    setTitleId: 2345,
    names: [
        {value: "Magistrate"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You assisted the Praetorian Loyalists to enforce the law for the peace and safety of everyone in Praetoria.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png"}],
    acquisition: "Complete every story arc in the Praetorian Responsibility storyline to earn this badge.",
    links: [
        {title: "Magistrate Badge", href: "https://homecoming.wiki/wiki/Magistrate_Badge"}
    ],
};
