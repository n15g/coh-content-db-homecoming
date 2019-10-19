import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Banisher} from "../defeat/banisher";
import {DarkMystic} from "../exploration/dark-mystic";
import {FaultlessMystic} from "../exploration/faultless-mystic";
import {Illusionist} from "../defeat/illusionist";
import {Mystic} from "../exploration/mystic";
import {MysticKing} from "../exploration/mystic-king";
import {SoulBinder} from "../defeat/soul-binder";
import {Tracer} from "../defeat/tracer";

export const Archmage: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "archmage",
    setTitleId: 167,
    names: [
        {value: "Archmage"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your research into the arcane, coupled with your experience in fighting magical foes, has unlocked heretofore unknown magics within you, earning you the title of Archmage. You have learned a spell of protection because of this.`},
        {type: Alternate.V, value: `Your research into the arcane, coupled with your experience in fighting magical foes, has unlocked heretofore unknown magics within you, earning you the title of Archmage. The associated spell of protection, which relies on a certain purity of spirit, is no longer useful to you.`}
    ],
    notes: `Awards the Eye of the Magus power`,
    links: [
        {title: "Archmage Badge", href: "https://paragonwiki.com/wiki/Archmage_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/archmage.png"}
    ],
    effect: `Eye of the Magus`,
    partials: [
            {key: Banisher.key, type: BadgePartialType.BADGE, badgeKey: Banisher.key},
            {key: DarkMystic.key, type: BadgePartialType.BADGE, badgeKey: DarkMystic.key},
            {key: FaultlessMystic.key, type: BadgePartialType.BADGE, badgeKey: FaultlessMystic.key},
            {key: Illusionist.key, type: BadgePartialType.BADGE, badgeKey: Illusionist.key},
            {key: Mystic.key, type: BadgePartialType.BADGE, badgeKey: Mystic.key},
            {key: MysticKing.key, type: BadgePartialType.BADGE, badgeKey: MysticKing.key},
            {key: SoulBinder.key, type: BadgePartialType.BADGE, badgeKey: SoulBinder.key},
            {key: Tracer.key, type: BadgePartialType.BADGE, badgeKey: Tracer.key}
    ]
};