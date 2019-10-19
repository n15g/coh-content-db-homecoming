import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {HeartOfTheCity} from "../exploration/heart-of-the-city";
import {KingsRighteousness} from "../exploration/kings-righteousness";
import {CourageDriven} from "../exploration/courage-driven";
import {FreedomsDefender} from "../exploration/freedoms-defender";
import {HonorableCaptain} from "../exploration/honorable-captain";
import {TalosMight} from "../exploration/talos-might";
import {Cornerstone} from "../exploration/cornerstone";
import {FoundersProtector} from "../exploration/founders-protector";
import {Gatekeeper} from "../exploration/gatekeeper";

export const Stouthearted: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "stouthearted",
    setTitleId: 647,
    names: [
        {type: Alternate.H, value: "Stouthearted"},
        {type: Alternate.V, value: "Stonehearted"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `You've left no stone unturned in your efforts to protect Paragon City's financial infrastructure. Your diligence is greatly appreciated by all.`},
        {type: Alternate.V, value: `No one can explain your turn to villainy after going to such lengths to defend all of Paragon. Perhaps your heart has turned to stone.`}
    ],
    notes: `Visit all Safeguard exploration badges`,
    links: [
        {title: "Stouthearted Badge", href: "https://paragonwiki.com/wiki/Stouthearted_Badge"},
        {title: "Stonehearted Badge", href: "https://paragonwiki.com/wiki/Stonehearted_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/stouthearted.png"}
    ],
    partials: [
            {key: HeartOfTheCity.key, type: BadgePartialType.BADGE, badgeKey: HeartOfTheCity.key},
            {key: KingsRighteousness.key, type: BadgePartialType.BADGE, badgeKey: KingsRighteousness.key},
            {key: CourageDriven.key, type: BadgePartialType.BADGE, badgeKey: CourageDriven.key},
            {key: FreedomsDefender.key, type: BadgePartialType.BADGE, badgeKey: FreedomsDefender.key},
            {key: HonorableCaptain.key, type: BadgePartialType.BADGE, badgeKey: HonorableCaptain.key},
            {key: TalosMight.key, type: BadgePartialType.BADGE, badgeKey: TalosMight.key},
            {key: Cornerstone.key, type: BadgePartialType.BADGE, badgeKey: Cornerstone.key},
            {key: FoundersProtector.key, type: BadgePartialType.BADGE, badgeKey: FoundersProtector.key},
            {key: Gatekeeper.key, type: BadgePartialType.BADGE, badgeKey: Gatekeeper.key}
    ]
};