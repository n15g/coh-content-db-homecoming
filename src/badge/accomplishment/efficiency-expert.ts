import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const EfficiencyExpert: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "efficiency-expert",
    setTitleId: 346,
    names: [
        {value: "Efficiency Expert"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You have proven yourself efficient by succeeding at all of Mr. Pither's timed tasks."}
    ],
    acquisition: "Complete all of Efficiency Expert Pither's timed missions successfully",
    links: [
        {title: "Efficiency Expert Badge", href: "https://paragonwiki.com/wiki/Efficiency_Expert_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png"}
    ],
};