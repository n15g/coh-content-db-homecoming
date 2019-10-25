import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {DarkAstoria} from "../../map/dark-astoria";

export const FollysVictim: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "follys-victim",
    setTitleId: 2179,
    names: [{value: "Folly's Victim"}],
    alignment: ALIGNMENT_ANY,
    mapKey: DarkAstoria.key,
    location: [2228.0, 176.0, 4896.0],
    badgeText: [{
        value: `Ever watchful of the sleeping god Mot, the Circle of Thorns have stood vigil on these grounds since its imprisonment.
Even as the last of Mot's bonds were shattered, the Circle sought to contain its terrible power.
Fools or heroes, the Circle's casualties were tremendous as they defied the wrath of the resurgent deity.
It is said that the Demon-Prince Stolas was the first to confront the manifestations of Mot.
When the Demon-Prince was broken and devoured, the ranks of his minions broke and fled into the streets of Dark Astoria.`
    }],
    notes: `Located in [map:${DarkAstoria.key}] in the Raimi Arcade neighborhood of Dark Astoria. It is located 176 yards south of the marker for Flicker.`,
    links: [
        {title: "Folly's Victim Badge", href: "https://paragonwiki.com/wiki/Folly%27s_Victim_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
