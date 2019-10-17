import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Protester: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "protester",
    setTitleId: 1418,
    names: [
        {value: "Protester"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Not one to stand idly by, you have made your opinions known.  For better or for worse."}
    ],
    acquisition: "Complete the The Protest zone event in Nova Praetoria",
    links: [
        {title: "Protester Badge", href: "https://paragonwiki.com/wiki/Protester_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/protester.png"}
    ],
};
