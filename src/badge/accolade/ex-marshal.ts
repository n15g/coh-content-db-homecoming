import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Annihilator} from "../defeat/annihilator";
import {ArachnosRising} from "../history/arachnos-rising";
import {TheMongoose} from "../defeat/the-mongoose";
import {TheNextBigThing} from "../exploration/the-next-big-thing";
import {PenitentOfVice} from "../accomplishment/penitent-of-vice";
import {WeaponInspector} from "../exploration/weapon-inspector";

export const ExMarshal: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "ex-marshal",
    setTitleId: 532,
    names: [
        {type: Alternate.H, value: "Ex-Marshal"},
        {type: Alternate.V, value: "Marshal"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `You once held the title of Marshal in Arachnos. Unfortunately, the memory is all that remains of the power it once gave you.`},
        {type: Alternate.V, value: `You've been awarded the title of Marshal for your service to Arachnos. This has given you a 5% increase to Endurance.`}
    ],
    notes: `Awards +5 Max Endurance`,
    links: [
        {title: "Ex-Marshal Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Ex-Marshal_Badge"},
        {title: "Marshal Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Marshal_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/ex-marshal.png"}
    ],
    effect: `+5 Max Endurance`,
    partials: [
        {key: Annihilator.key, type: BadgePartialType.BADGE, badgeKey: Annihilator.key},
        {key: ArachnosRising.key, type: BadgePartialType.BADGE, badgeKey: ArachnosRising.key},
        {key: PenitentOfVice.key, type: BadgePartialType.BADGE, badgeKey: PenitentOfVice.key},
        {key: TheMongoose.key, type: BadgePartialType.BADGE, badgeKey: TheMongoose.key},
        {key: TheNextBigThing.key, type: BadgePartialType.BADGE, badgeKey: TheNextBigThing.key},
        {key: WeaponInspector.key, type: BadgePartialType.BADGE, badgeKey: WeaponInspector.key}
    ]
};
