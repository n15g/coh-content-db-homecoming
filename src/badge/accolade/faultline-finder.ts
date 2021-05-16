import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";
import {EscapeArtist} from "../exploration/escape-artist";
import {DrownedRat} from "../exploration/drowned-rat";
import {OldFashioned} from "../exploration/old-fashioned";
import {EggHunter} from "../exploration/egg-hunter";
import {Undammed} from "../exploration/undammed";
import {Upcycled} from "../exploration/upcycled";
import {Riveting} from "../exploration/riveting";
import {RockBottom} from "../exploration/rock-bottom";

export const FaultlineFinder: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "faultline-finder",
    setTitleId: 1598,
    names: [
        {value: "Faultline Finder"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Faultline.`}
    ],
    notes: `Visit all exploration badges in [map:${Faultline.key}]`,
    links: [
        {title: "Faultline Finder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Faultline_Finder_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: EscapeArtist.key, type: BadgePartialType.BADGE, badgeKey: EscapeArtist.key},
        {key: DrownedRat.key, type: BadgePartialType.BADGE, badgeKey: DrownedRat.key},
        {key: OldFashioned.key, type: BadgePartialType.BADGE, badgeKey: OldFashioned.key},
        {key: EggHunter.key, type: BadgePartialType.BADGE, badgeKey: EggHunter.key},
        {key: Undammed.key, type: BadgePartialType.BADGE, badgeKey: Undammed.key},
        {key: Upcycled.key, type: BadgePartialType.BADGE, badgeKey: Upcycled.key},
        {key: Riveting.key, type: BadgePartialType.BADGE, badgeKey: Riveting.key},
        {key: RockBottom.key, type: BadgePartialType.BADGE, badgeKey: RockBottom.key}
    ]
};
