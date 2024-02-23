import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Survivor: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "survivor",
    setTitleId: 2348,
    names: [
        {value: "Survivor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You helped the Praetorian Resistance to reach their goals with as little loss of life as possible.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_resist.png"}],
    acquisition: "Complete every story arc in the Praetorian Warden storyline to earn this badge.",
    links: [
        {title: "Survivor Badge", href: "https://homecoming.wiki/wiki/Survivor_Badge"}
    ],
};
