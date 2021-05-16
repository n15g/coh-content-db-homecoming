import {ALIGNMENT_HERO, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";
import {PortalParter} from "../exploration/portal-parter";
import {UseMightForRight} from "../exploration/use-might-for-right";
import {CauseForConcern} from "../exploration/cause-for-concern";
import {GeneticallyAltered} from "../exploration/genetically-altered";
import {RiktiGoneWild} from "../exploration/rikti-gone-wild";
import {ShadesOfArachnos} from "../exploration/shades-of-arachnos";
import {AllSeeing} from "../exploration/all-seeing";
import {DarkOmen} from "../exploration/dark-omen";

export const PortalCorpAnalyst: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "portal-corp-analyst",
    setTitleId: 1579,
    names: [
        {value: "Portal Corp Analyst"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Peregrine Island.`}
    ],
    notes: `Visit all exploration badges in [map:${PeregrineIsland.key}]`,
    links: [
        {title: "Portal Corp Analyst Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Portal_Corp_Analyst_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: PortalParter.key, type: BadgePartialType.BADGE, badgeKey: PortalParter.key},
        {key: UseMightForRight.key, type: BadgePartialType.BADGE, badgeKey: UseMightForRight.key},
        {key: CauseForConcern.key, type: BadgePartialType.BADGE, badgeKey: CauseForConcern.key},
        {key: GeneticallyAltered.key, type: BadgePartialType.BADGE, badgeKey: GeneticallyAltered.key},
        {key: RiktiGoneWild.key, type: BadgePartialType.BADGE, badgeKey: RiktiGoneWild.key},
        {key: ShadesOfArachnos.key, type: BadgePartialType.BADGE, badgeKey: ShadesOfArachnos.key},
        {key: AllSeeing.key, type: BadgePartialType.BADGE, badgeKey: AllSeeing.key},
        {key: DarkOmen.key, type: BadgePartialType.BADGE, badgeKey: DarkOmen.key}
    ]
};
