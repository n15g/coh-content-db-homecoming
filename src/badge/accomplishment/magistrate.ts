import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Magistrate: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "magistrate",
    setTitleId: 2345,
    names: [
        {value: "Magistrate"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete every story arc in the Praetorian Responsibility storyline to earn this badge.",
    links: [
        {title: "Magistrate Badge", href: "https://paragonwiki.com/wiki/Magistrate_Badge"}
    ],
};
