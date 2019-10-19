import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Secured} from "../event/secured";
import {PowerHungry} from "../event/power-hungry";
import {ArtifactDestroyer} from "../event/artifact-destroyer";
import {Veiled} from "../event/veiled";
import {Trusting} from "../event/trusting";

export const Meticulous: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "meticulous",
    setTitleId: 1773,
    names: [
        {value: "Meticulous"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You are not tied to any single decision, and must pursue every course of action available to determine the consequences.`}
    ],
    notes: `Available during Halloween Events`,
    links: [
        {title: "Meticulous Badge", href: "https://paragonwiki.com/wiki/Meticulous_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/meticulous.png"}
    ],
    partials: [
            {key: Secured.key, type: BadgePartialType.BADGE, badgeKey: Secured.key},
            {key: PowerHungry.key, type: BadgePartialType.BADGE, badgeKey: PowerHungry.key},
            {key: ArtifactDestroyer.key, type: BadgePartialType.BADGE, badgeKey: ArtifactDestroyer.key},
            {key: Veiled.key, type: BadgePartialType.BADGE, badgeKey: Veiled.key},
            {key: Trusting.key, type: BadgePartialType.BADGE, badgeKey: Trusting.key}
    ]
};