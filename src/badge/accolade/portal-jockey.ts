import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {DimensionalWarder} from "../defeat/dimensional-warder";
import {Multidimensional} from "../exploration/multidimensional";
import {Scholastic} from "../history/scholastic";
import {Shrouded} from "../exploration/shrouded";

export const PortalJockey: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "portal-jockey",
    setTitleId: 165,
    names: [
        {value: "Portal Jockey"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your efforts to help Portal Corporation explore the vast multiverse have earned you the title of Portal Jockey. This perk comes with +5 Endurance and +5% Hit Points.`},
        {type: Alternate.V, value: `Portal Corporation has disavowed your many efforts on their behalf. The energies you had received from those other worlds no longer seems to flow.`}
    ],
    notes: `Awards +5% Max Health and +5 Max Endurance`,
    links: [
        {title: "Portal Jockey Badge", href: "https://paragonwiki.com/wiki/Portal_Jockey_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/portal-jockey.png"}
    ],
    effect: `+5% Max Health and +5 Max Endurance`,
    partials: [
            {key: DimensionalWarder.key, type: BadgePartialType.BADGE, badgeKey: DimensionalWarder.key},
            {key: Multidimensional.key, type: BadgePartialType.BADGE, badgeKey: Multidimensional.key},
            {key: Scholastic.key, type: BadgePartialType.BADGE, badgeKey: Scholastic.key},
            {key: Shrouded.key, type: BadgePartialType.BADGE, badgeKey: Shrouded.key}
    ]
};