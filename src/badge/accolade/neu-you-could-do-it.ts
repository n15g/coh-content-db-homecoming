import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData, mapReference} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";
import {BingeEater} from "../exploration/binge-eater";
import {Cluttered} from "../exploration/cluttered";
import {DrinkEnriche} from "../exploration/drink-enriche";
import {GradeF} from "../exploration/grade-f";
import {KeepingTheLightsOn} from "../exploration/keeping-the-lights-on";
import {ReadyForAnything} from "../exploration/ready-for-anything";
import {Nailbiter} from "../exploration/nailbiter";
import {TheNewBoss} from "../exploration/the-new-boss";

export const NeuYouCouldDoIt: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "neu-you-could-do-it",
    setTitleId: 1655,
    names: [
        {value: "Neu You Could Do It"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Neutropolis's Underground.`}
    ],
    notes: `Visit all exploration badges in ${mapReference(UndergroundNeutropolis)}`,
    links: [
        {title: "Neu You Could Do It Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Neu_You_Could_Do_It_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-p.png"}
    ],
    partials: [
        {key: BingeEater.key, type: BadgePartialType.BADGE, badgeKey: BingeEater.key},
        {key: Cluttered.key, type: BadgePartialType.BADGE, badgeKey: Cluttered.key},
        {key: DrinkEnriche.key, type: BadgePartialType.BADGE, badgeKey: DrinkEnriche.key},
        {key: GradeF.key, type: BadgePartialType.BADGE, badgeKey: GradeF.key},
        {key: KeepingTheLightsOn.key, type: BadgePartialType.BADGE, badgeKey: KeepingTheLightsOn.key},
        {key: ReadyForAnything.key, type: BadgePartialType.BADGE, badgeKey: ReadyForAnything.key},
        {key: Nailbiter.key, type: BadgePartialType.BADGE, badgeKey: Nailbiter.key},
        {key: TheNewBoss.key, type: BadgePartialType.BADGE, badgeKey: TheNewBoss.key}
    ]
};
