import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";
import {SeaDog} from "../exploration/sea-dog";
import {SuperSpy} from "../exploration/super-spy";
import {TheUnnamed} from "../exploration/the-unnamed";
import {TheWolfsSnarl} from "../exploration/the-wolfs-snarl";
import {TheWolfsMaw} from "../exploration/the-wolfs-maw";
import {VampyriWatcher} from "../exploration/vampyri-watcher";
import {Vulcanologist} from "../exploration/vulcanologist";
import {WordsOfTheWarrior} from "../exploration/words-of-the-warrior";

export const StraightThroughStriga: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "straight-through-striga",
    setTitleId: 1879,
    names: [
        {value: "Straight Through Striga"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Striga Isle.`}
    ],
    notes: `Visit all exploration badges in [map:${StrigaIsle.key}]`,
    links: [
        {title: "Straight Through Striga Badge", href: "https://paragonwiki.com/wiki/Straight_Through_Striga_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
            {key: SeaDog.key, type: BadgePartialType.BADGE, badgeKey: SeaDog.key},
            {key: SuperSpy.key, type: BadgePartialType.BADGE, badgeKey: SuperSpy.key},
            {key: TheUnnamed.key, type: BadgePartialType.BADGE, badgeKey: TheUnnamed.key},
            {key: TheWolfsSnarl.key, type: BadgePartialType.BADGE, badgeKey: TheWolfsSnarl.key},
            {key: TheWolfsMaw.key, type: BadgePartialType.BADGE, badgeKey: TheWolfsMaw.key},
            {key: VampyriWatcher.key, type: BadgePartialType.BADGE, badgeKey: VampyriWatcher.key},
            {key: Vulcanologist.key, type: BadgePartialType.BADGE, badgeKey: Vulcanologist.key},
            {key: WordsOfTheWarrior.key, type: BadgePartialType.BADGE, badgeKey: WordsOfTheWarrior.key}
    ]
};