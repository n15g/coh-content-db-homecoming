import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ForgedByHellfire} from "../exploration/forged-by-hellfire";
import {Lorekeeper} from "../history/lorekeeper";
import {Overlord} from "../exploration/overlord";
import {SoulTaker} from "../accomplishment/soul-taker";
import {Coldblooded} from "../defeat/coldblooded";

export const Exorcised: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "exorcised",
    setTitleId: 536,
    names: [
        {type: Alternate.H, value: "Exorcised"},
        {type: Alternate.V, value: "Demonic"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `The goodness you've let into your heart appears to have banished the spirit of a demon which once resided within.`},
        {
            type: Alternate.V,
            value: `The spirit of a demon resides within you. Bringing it to the surface of your mind can make you highly resistant to all types of damage for a short time. You mustn't let the demon out too long, or you just may lose your mortal soul, forever.`
        }
    ],
    notes: `Awards the Demonic Aura power`,
    links: [
        {title: "Exorcised Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Exorcised_Badge"},
        {title: "Demonic Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Demonic_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/exorcised.png"}
    ],
    effect: `Demonic Aura`,
    partials: [
        {key: Coldblooded.key, type: BadgePartialType.BADGE, badgeKey: Coldblooded.key},
        {key: ForgedByHellfire.key, type: BadgePartialType.BADGE, badgeKey: ForgedByHellfire.key},
        {key: Lorekeeper.key, type: BadgePartialType.BADGE, badgeKey: Lorekeeper.key},
        {key: Overlord.key, type: BadgePartialType.BADGE, badgeKey: Overlord.key},
        {key: SoulTaker.key, type: BadgePartialType.BADGE, badgeKey: SoulTaker.key}
    ]
};
