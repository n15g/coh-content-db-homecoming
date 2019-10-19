import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Sentry} from "../defeat/sentry";
import {BombSpecialist} from "../defeat/bomb-specialist";
import {Chief} from "../defeat/chief";

export const Watchman: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "watchman",
    setTitleId: 836,
    names: [
        {type: Alternate.M, value: "Watchman"},
        {type: Alternate.F, value: "Watchwoman"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have defended Paragon City from the invading Rikti!`},
        {type: Alternate.V, value: `You have defended the Rogue Isles from the invading Rikti!`}
    ],
    notes: `Awards the Elusive Mind power`,
    links: [
        {title: "Watchman Badge", href: "https://paragonwiki.com/wiki/Watchman_Badge"},
        {title: "Watchwoman Badge", href: "https://paragonwiki.com/wiki/Watchwoman_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/watchman.png"}
    ],
    effect: `Elusive Mind`,
    partials: [
        {key: Sentry.key, type: BadgePartialType.BADGE, badgeKey: Sentry.key},
        {key: BombSpecialist.key, type: BadgePartialType.BADGE, badgeKey: BombSpecialist.key},
        {key: Chief.key, type: BadgePartialType.BADGE, badgeKey: Chief.key}
    ]
};
