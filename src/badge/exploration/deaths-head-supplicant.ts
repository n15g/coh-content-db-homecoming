import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const DeathsHeadSupplicant: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "deaths-head-supplicant",
    setTitleId: 2182,
    names: [{value: "Death's Head Supplicant"}],
    alignment: ALIGNMENT_ANY,
    mapKey: DarkAstoria.key,
    location: [1727.0, 233.0, 905.0],
    badgeText: [{
        value: `Behold! Before you lies the glory of Mot.
In this place its true body lies exposed; a vast expanse of reconstituting flesh and yawning maws, feasting on life so it can be resuscitated as it perpetually dies and rots anew.
Mot's capacity for consumption does not yet equal its appetites, for much of the body is desiccated by centuries of imprisonment or is still bound in ways both arcane and metaphysical.
The many mouths that scar its horrid form are, as of yet, still stifled and immature compared to their glory in antiquity.
Only one has fully extended to its full voraciousness, but that one is enough to drag all of Dark Astoria into crushing oblivion.`
    }],
    notes: `Located in [map:${DarkAstoria.key}] in the Moth Cemetery neighborhood, approximately 191 yards northwest of the Moth Cemetery marker.`,
    links: [
        {title: "Death's Head Supplicant Badge", href: "https://paragonwiki.com/wiki/Death%27s_Head_Supplicant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
