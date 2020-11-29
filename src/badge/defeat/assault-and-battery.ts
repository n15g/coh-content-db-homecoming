import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AssaultAndBattery: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "assault-and-battery",
    setTitleId: 2446,
    names: [
        {value: "Assault and Battery"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Despite their propensity for getting back up, you have taught these Freakshow a thing or two about knowing when to stay down.`}
    ],
    acquisition: "Defeat 50 Freakshow Super Stunners.",
    links: [
        {title: "Assault and Battery Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Assault_and_Battery_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/assault-and-battery.png"}
    ],
};
