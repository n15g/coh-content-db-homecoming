import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const DarkMystic: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dark-mystic",
    names: [{value: "Dark Mystic"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [1678.0, 6.0, 2833.0],
    badgeText: [{
        value: "Some once claimed the reason the spirits walk the streets of Dark Astoria is the fact that there is a powerful Ley Line nexus in the middle of Moth Cemetery." +
            " They have since learned the truth."
    }],
    notes: "Located in [map:echo-dark-astoria] 309 yards due north of the Dido's View marker.",
    links: [
        {title: "Dark Mystic Badge", href: "https://paragonwiki.com/wiki/Dark_Mystic_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
