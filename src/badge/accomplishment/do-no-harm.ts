import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DoNoHarm: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "do-no-harm",
    setTitleId: 2386,
    names: [
        {value: "Do No Harm"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You have delivered medical supplies to the Rikti.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_stature_11.png"}],
    acquisition: "Complete the task set `Hippocratic Oath`.",
    links: [
        {title: "Do No Harm Badge", href: "https://paragonwiki.com/wiki/Do_No_Harm_Badge"}
    ],
};
