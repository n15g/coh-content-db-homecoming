import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {TheHollows} from "../../map/the-hollows";
import {Parapsychologist} from "../exploration/parapsychologist";
import {SeekerOfMonsters} from "../exploration/seeker-of-monsters";
import {Geologist} from "../exploration/geologist";
import {Backwoodsman} from "../exploration/backwoodsman";
import {GanglandFury} from "../exploration/gangland-fury";
import {GraffitiCommunicator} from "../exploration/graffiti-communicator";
import {CircleSeeker} from "../exploration/circle-seeker";
import {Ironic} from "../exploration/ironic";

export const WincottsAlly: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "wincotts-ally",
    setTitleId: 1521,
    names: [
        {type: Alternate.H, value: "Wincott's Ally"},
        {type: Alternate.V, value: "Wincott's Betrayer"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within the Hollows.`}
    ],
    notes: `Visit all exploration badges in [map:${TheHollows.key}]`,
    links: [
        {title: "Wincott's Ally Badge", href: "https://homecoming.wiki/wiki/Wincott%27s_Ally_Badge"},
        {title: "Wincott's Betrayer Badge", href: "https://homecoming.wiki/wiki/Wincott%27s_Betrayer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png"}
    ],
    partials: [
        {key: Parapsychologist.key, type: BadgePartialType.BADGE, badgeKey: Parapsychologist.key},
        {key: SeekerOfMonsters.key, type: BadgePartialType.BADGE, badgeKey: SeekerOfMonsters.key},
        {key: Geologist.key, type: BadgePartialType.BADGE, badgeKey: Geologist.key},
        {key: Backwoodsman.key, type: BadgePartialType.BADGE, badgeKey: Backwoodsman.key},
        {key: GanglandFury.key, type: BadgePartialType.BADGE, badgeKey: GanglandFury.key},
        {key: GraffitiCommunicator.key, type: BadgePartialType.BADGE, badgeKey: GraffitiCommunicator.key},
        {key: CircleSeeker.key, type: BadgePartialType.BADGE, badgeKey: CircleSeeker.key},
        {key: Ironic.key, type: BadgePartialType.BADGE, badgeKey: Ironic.key}
    ]
};
