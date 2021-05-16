import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CreyPowerTank: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "crey-power-tank",
    setTitleId: 507,
    names: [
        {value: "Crey Power Tank"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "An Arena battle is a good place for Crey to test their equipment."}
    ],
    acquisition: "Defeat 100 Crey Tanks (Crey)",
    links: [
        {title: "Crey Power Tank Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Crey_Power_Tank_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
