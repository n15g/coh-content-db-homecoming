import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DoNoHarm: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "do-no-harm",
    names: [
        {value: "Do No Harm"}
    ],
    alignment: ALIGNMENT_ANY,
    acquisition: "Complete the task set `Hippocratic Oath`.",
    links: [
        {title: "Do No Harm Badge", href: "https://paragonwiki.com/wiki/Do_No_Harm_Badge"}
    ],
};
