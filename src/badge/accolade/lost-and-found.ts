import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {FoundersFalls} from "../../map/founders-falls";
import {Foggy} from "../exploration/foggy";
import {Chaotician} from "../exploration/chaotician";
import {GuardianAngel} from "../exploration/guardian-angel";
import {LosingParadise} from "../exploration/losing-paradise";
import {WatchfulEyes} from "../exploration/watchful-eyes";
import {HamidonsFury} from "../exploration/hamidons-fury";
import {FoundersHero} from "../exploration/founders-hero";
import {Misunderstood} from "../exploration/misunderstood";

export const LostAndFound: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "lost-and-found",
    setTitleId: 1564,
    names: [
        {value: "Lost and Found"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Founders' Falls.`}
    ],
    notes: `Visit all exploration badges in [map:${FoundersFalls.key}]`,
    links: [
        {title: "Lost and Found Badge", href: "https://paragonwiki.com/wiki/Lost_and_Found_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
            {key: Foggy.key, type: BadgePartialType.BADGE, badgeKey: Foggy.key},
            {key: Chaotician.key, type: BadgePartialType.BADGE, badgeKey: Chaotician.key},
            {key: GuardianAngel.key, type: BadgePartialType.BADGE, badgeKey: GuardianAngel.key},
            {key: LosingParadise.key, type: BadgePartialType.BADGE, badgeKey: LosingParadise.key},
            {key: WatchfulEyes.key, type: BadgePartialType.BADGE, badgeKey: WatchfulEyes.key},
            {key: HamidonsFury.key, type: BadgePartialType.BADGE, badgeKey: HamidonsFury.key},
            {key: FoundersHero.key, type: BadgePartialType.BADGE, badgeKey: FoundersHero.key},
            {key: Misunderstood.key, type: BadgePartialType.BADGE, badgeKey: Misunderstood.key}
    ]
};