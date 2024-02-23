import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const RaiderEngineer: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "raider-engineer",
    setTitleId: 487,
    names: [
        {value: "Raider Engineer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "This will provide a good defense for your gladiators."}
    ],
    acquisition: "Destroy 100 Force Field Generators summoned by Sky Raider Engineers (Sky Raiders)",
    links: [
        {title: "Raider Engineer Badge", href: "https://homecoming.wiki/wiki/Raider_Engineer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
