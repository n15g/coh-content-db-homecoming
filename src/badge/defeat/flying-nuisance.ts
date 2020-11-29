import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const FlyingNuisance: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "flying-nuisance",
    setTitleId: 2444,
    names: [
        {value: "Flying Nuisance"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
	{value: `You have dispersed hundreds of scavenging Natterlings and sent them back empty handed to the Factory Cubes.`}
    ],
    acquisition: "Defeat 500 Rularuu Natterlings.",
    links: [
	{title: "Flying Nuisance Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Flying_Nuisance_Badge"}
    ],
    icons: [
	{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/flying-nuisance.png"}
    ],
};
