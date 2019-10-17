import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TrueNemesis: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "true-nemesis",
    names: [
        {value: "True Nemesis"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete the task set `Nemesis Rex`.",
    links: [
        {title: "True Nemesis Badge", href: "https://paragonwiki.com/wiki/True_Nemesis_Badge"}
    ],
};
