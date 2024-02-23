import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Ace} from "../exploration/ace";
import {Finder} from "../defeat/finder";
import {PortalParter} from "../exploration/portal-parter";
import {Savant} from "../history/savant";
import {Zookeeper} from "../defeat/zookeeper";

export const Vanguard: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "vanguard",
    setTitleId: 164,
    names: [
        {value: "Vanguard"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your efforts against the extra-dimensional invaders have been recognized, and you have received the Rikti Resistance Medal. You have found and kept a Rikti power amplifier.`},
        {type: Alternate.V, value: `Vanguard still values your efforts against the extra-dimensional invaders, but they no longer trust you as much as before. Without you even knowing it, they have silently confiscated your Rikti power amplifier. Vanguard ops <i>are</i> good.`}
    ],
    notes: `Awards the Vanguard Medal power`,
    links: [
        {title: "Vanguard Badge", href: "https://homecoming.wiki/wiki/Vanguard_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/vanguard.png"}
    ],
    effect: `Vanguard Medal`,
    partials: [
        {key: Ace.key, type: BadgePartialType.BADGE, badgeKey: Ace.key},
        {key: Finder.key, type: BadgePartialType.BADGE, badgeKey: Finder.key},
        {key: PortalParter.key, type: BadgePartialType.BADGE, badgeKey: PortalParter.key},
        {key: Savant.key, type: BadgePartialType.BADGE, badgeKey: Savant.key},
        {key: Zookeeper.key, type: BadgePartialType.BADGE, badgeKey: Zookeeper.key}
    ]
};
