import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ReformedFirebug} from "../achievement/reformed-firebug";
import {BloodyHands} from "../defeat/bloody-hands";
import {Pedestrian} from "../achievement/pedestrian";
import {ThinLine} from "../defeat/thin-line";
import {Locksmith} from "../defeat/locksmith";
import {AngerManager} from "../defeat/anger-manager";

export const Uninsurable: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "uninsurable",
    setTitleId: 548,
    names: [
        {type: Alternate.H, value: "Uninsurable"},
        {type: Alternate.V, value: "Force of Nature"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `The massive destruction you previously wrought has made it really difficult to find anyone willing to insure you for collateral damage liability.`},
        {type: Alternate.V, value: `Paragon City has felt your wrath; you are a true Force of Nature!`}
    ],
    notes: `Awards the Force of Nature power`,
    links: [
        {title: "Uninsurable Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Uninsurable_Badge"},
        {title: "Force of Nature Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Force_of_Nature_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/uninsurable.png"}
    ],
    effect: `Force of Nature`,
    partials: [
        {key: ReformedFirebug.key, type: BadgePartialType.BADGE, badgeKey: ReformedFirebug.key},
        {key: BloodyHands.key, type: BadgePartialType.BADGE, badgeKey: BloodyHands.key},
        {key: Pedestrian.key, type: BadgePartialType.BADGE, badgeKey: Pedestrian.key},
        {key: ThinLine.key, type: BadgePartialType.BADGE, badgeKey: ThinLine.key},
        {key: Locksmith.key, type: BadgePartialType.BADGE, badgeKey: Locksmith.key},
        {key: AngerManager.key, type: BadgePartialType.BADGE, badgeKey: AngerManager.key}
    ]
};
