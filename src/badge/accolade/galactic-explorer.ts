import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";
import {BirdWatcher} from "../exploration/bird-watcher";
import {BlueShield} from "../exploration/blue-shield";
import {Brawler} from "../exploration/brawler";
import {Tank} from "../exploration/tank";
import {LandLocked} from "../exploration/land-locked";
import {GalacticFan} from "../exploration/galactic-fan";
import {EyeOfTheGemini} from "../exploration/eye-of-the-gemini";
import {OrionsBelt} from "../exploration/orions-belt";

export const GalacticExplorer: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "galactic-explorer",
    setTitleId: 1525,
    names: [
        {value: "Galactic Explorer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Galaxy City.`}
    ],
    notes: `Visit all exploration badges in [map:${EchoGalaxyCity.key}]`,
    links: [
        {title: "Galactic Explorer Badge", href: "https://homecoming.wiki/wiki/Galactic_Explorer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: BirdWatcher.key, type: BadgePartialType.BADGE, badgeKey: BirdWatcher.key},
        {key: BlueShield.key, type: BadgePartialType.BADGE, badgeKey: BlueShield.key},
        {key: Brawler.key, type: BadgePartialType.BADGE, badgeKey: Brawler.key},
        {key: Tank.key, type: BadgePartialType.BADGE, badgeKey: Tank.key},
        {key: LandLocked.key, type: BadgePartialType.BADGE, badgeKey: LandLocked.key},
        {key: GalacticFan.key, type: BadgePartialType.BADGE, badgeKey: GalacticFan.key},
        {key: EyeOfTheGemini.key, type: BadgePartialType.BADGE, badgeKey: EyeOfTheGemini.key},
        {key: OrionsBelt.key, type: BadgePartialType.BADGE, badgeKey: OrionsBelt.key}
    ]
};
