import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";
import {RazorToothed} from "../exploration/razor-toothed";
import {ForgedByHellfire} from "../exploration/forged-by-hellfire";
import {FreakOfNature} from "../exploration/freak-of-nature";
import {PitViper} from "../exploration/pit-viper";
import {SkyChaser} from "../exploration/sky-chaser";
import {UnwelcomeGuest} from "../exploration/unwelcome-guest";
import {SkyTrader} from "../exploration/sky-trader";
import {CarpingTheDiem} from "../exploration/carping-the-diem";

export const JumpedTheShark: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "jumped-the-shark",
    setTitleId: 1500,
    names: [
        {value: "Jumped the Shark"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Sharkhead Isle.`}
    ],
    notes: `Visit all exploration badges in [map:${SharkheadIsle.key}]`,
    links: [
        {title: "Jumped the Shark Badge", href: "https://homecoming.wiki/wiki/Jumped_the_Shark_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
        {key: RazorToothed.key, type: BadgePartialType.BADGE, badgeKey: RazorToothed.key},
        {key: ForgedByHellfire.key, type: BadgePartialType.BADGE, badgeKey: ForgedByHellfire.key},
        {key: FreakOfNature.key, type: BadgePartialType.BADGE, badgeKey: FreakOfNature.key},
        {key: PitViper.key, type: BadgePartialType.BADGE, badgeKey: PitViper.key},
        {key: SkyChaser.key, type: BadgePartialType.BADGE, badgeKey: SkyChaser.key},
        {key: UnwelcomeGuest.key, type: BadgePartialType.BADGE, badgeKey: UnwelcomeGuest.key},
        {key: SkyTrader.key, type: BadgePartialType.BADGE, badgeKey: SkyTrader.key},
        {key: CarpingTheDiem.key, type: BadgePartialType.BADGE, badgeKey: CarpingTheDiem.key}
    ]
};
