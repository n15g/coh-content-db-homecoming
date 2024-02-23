import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";
import {Mystic} from "../exploration/mystic";
import {Inmate} from "../exploration/inmate";
import {FlyingShark} from "../exploration/flying-shark";
import {Fugitive} from "../exploration/fugitive";
import {ForwardThinker} from "../exploration/forward-thinker";
import {SecretPath} from "../exploration/secret-path";
import {SixthPassenger} from "../exploration/sixth-passenger";
import {Unsubtle} from "../exploration/unsubtle";

export const ZigWarden: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "zig-warden",
    setTitleId: 1571,
    names: [
        {type: Alternate.H, value: "Zig Warden"},
        {type: Alternate.MV, value: "King of the Zig"},
        {type: Alternate.FV, value: "Queen of the Zig"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Brickstown.`}
    ],
    notes: `Visit all exploration badges in [map:${Brickstown.key}]`,
    links: [
        {title: "Zig Warden Badge", href: "https://homecoming.wiki/wiki/Zig_Warden_Badge"},
        {title: "King of the Zig Badge", href: "https://homecoming.wiki/wiki/King_of_the_Zig_Badge"},
        {title: "Queen of the Zig Badge", href: "https://homecoming.wiki/wiki/Queen_of_the_Zig_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png"}
    ],
    partials: [
        {key: Mystic.key, type: BadgePartialType.BADGE, badgeKey: Mystic.key},
        {key: Inmate.key, type: BadgePartialType.BADGE, badgeKey: Inmate.key},
        {key: FlyingShark.key, type: BadgePartialType.BADGE, badgeKey: FlyingShark.key},
        {key: Fugitive.key, type: BadgePartialType.BADGE, badgeKey: Fugitive.key},
        {key: ForwardThinker.key, type: BadgePartialType.BADGE, badgeKey: ForwardThinker.key},
        {key: SecretPath.key, type: BadgePartialType.BADGE, badgeKey: SecretPath.key},
        {key: SixthPassenger.key, type: BadgePartialType.BADGE, badgeKey: SixthPassenger.key},
        {key: Unsubtle.key, type: BadgePartialType.BADGE, badgeKey: Unsubtle.key}
    ]
};
