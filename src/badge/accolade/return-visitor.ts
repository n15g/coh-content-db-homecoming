import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Brickhouse} from "../exploration/brickhouse";
import {KingMaker} from "../exploration/king-maker";
import {RoadRaged} from "../exploration/road-raged";
import {SteelWorker} from "../exploration/steel-worker";
import {TalonOfTalos} from "../exploration/talon-of-talos";
import {Libertarian} from "../exploration/libertarian";
import {GateCloser} from "../exploration/gate-closer";
import {GlobalGuardian} from "../exploration/global-guardian";
import {Revolutionary} from "../exploration/revolutionary";

export const ReturnVisitor: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "return-visitor",
    setTitleId: 551,
    names: [
        {type: Alternate.H, value: "Return Visitor"},
        {type: Alternate.V, value: "Invader"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You've seen a lot of Paragon from the other side already, so you've got a head start on making your new life here.`},
        {type: Alternate.V, value: `No corner of Paragon City is safe from your destruction!`}
    ],
    notes: `Awards +5% Max Health`,
    links: [
        {title: "Return Visitor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Return_Visitor_Badge"},
        {title: "Invader Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Invader_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/return-visitor.png"}
    ],
    effect: `+5% Max Health`,
    partials: [
        {key: Libertarian.key, type: BadgePartialType.BADGE, badgeKey: Libertarian.key},
        {key: Brickhouse.key, type: BadgePartialType.BADGE, badgeKey: Brickhouse.key},
        {key: GateCloser.key, type: BadgePartialType.BADGE, badgeKey: GateCloser.key},
        {key: GlobalGuardian.key, type: BadgePartialType.BADGE, badgeKey: GlobalGuardian.key},
        {key: KingMaker.key, type: BadgePartialType.BADGE, badgeKey: KingMaker.key},
        {key: RoadRaged.key, type: BadgePartialType.BADGE, badgeKey: RoadRaged.key},
        {key: SteelWorker.key, type: BadgePartialType.BADGE, badgeKey: SteelWorker.key},
        {key: TalonOfTalos.key, type: BadgePartialType.BADGE, badgeKey: TalonOfTalos.key},
        {key: Revolutionary.key, type: BadgePartialType.BADGE, badgeKey: Revolutionary.key}
    ]
};
