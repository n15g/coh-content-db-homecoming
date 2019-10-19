import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";
import {DeucesWild} from "../exploration/deuces-wild";
import {Stonekeeper} from "../exploration/stonekeeper";
import {CamelSnot} from "../exploration/camel-snot";
import {DeadMansTree} from "../exploration/dead-mans-tree";
import {InfamousRubble} from "../exploration/infamous-rubble";
import {Showstopper} from "../exploration/showstopper";
import {Paroled} from "../exploration/paroled";
import {SocialWorker} from "../exploration/social-worker";

export const JohnnysExBestFriend: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "johnnys-ex-best-friend",
    setTitleId: 1509,
    names: [
        {type: Alternate.H, value: "Johnny's Ex-Best Friend"},
        {type: Alternate.MV, value: "Johnny's Go To Guy"},
        {type: Alternate.FV, value: "Johnny's Go To Gal"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within St. Martial.`}
    ],
    notes: `Visit all exploration badges in [map:${StMartial.key}]`,
    links: [
        {title: "Johnny's Ex-Best Friend Badge", href: "https://paragonwiki.com/wiki/Johnny%27s_Ex-Best_Friend_Badge"},
        {title: "Johnny's Go To Guy Badge", href: "https://paragonwiki.com/wiki/Johnny%27s_Go_To_Guy_Badge"},
        {title: "Johnny's Go To Gal Badge", href: "https://paragonwiki.com/wiki/Johnny%27s_Go_To_Gal_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
        {key: DeucesWild.key, type: BadgePartialType.BADGE, badgeKey: DeucesWild.key},
        {key: Paroled.key, type: BadgePartialType.BADGE, badgeKey: Paroled.key},
        {key: Stonekeeper.key, type: BadgePartialType.BADGE, badgeKey: Stonekeeper.key},
        {key: CamelSnot.key, type: BadgePartialType.BADGE, badgeKey: CamelSnot.key},
        {key: DeadMansTree.key, type: BadgePartialType.BADGE, badgeKey: DeadMansTree.key},
        {key: SocialWorker.key, type: BadgePartialType.BADGE, badgeKey: SocialWorker.key},
        {key: InfamousRubble.key, type: BadgePartialType.BADGE, badgeKey: InfamousRubble.key},
        {key: Showstopper.key, type: BadgePartialType.BADGE, badgeKey: Showstopper.key}
    ]
};
