import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TrueNemesis: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "true-nemesis",
    setTitleId: 2387,
    names: [
        {value: "True Nemesis"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have stopped Nemesis Rex's incursion into Primal Earth.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_stature_13.png"}],
    acquisition: "Complete the task set `Nemesis Rex`.",
    links: [
        {title: "True Nemesis Badge", href: "https://paragonwiki.com/wiki/True_Nemesis_Badge"}
    ],
};
