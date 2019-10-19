import {ALIGNMENT_VILLAIN, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";
import {Sparky} from "../exploration/sparky";
import {MediaJunky} from "../exploration/media-junky";
import {Egghead} from "../exploration/egghead";
import {Steamed} from "../exploration/steamed";
import {SweetTooth} from "../exploration/sweet-tooth";
import {DoomSayer} from "../exploration/doom-sayer";
import {MasterOfScience} from "../exploration/master-of-science";
import {CircleGazer} from "../exploration/circle-gazer";

export const MadScienceSupporter: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "mad-science-supporter",
    setTitleId: 1495,
    names: [
        {value: "Mad Science Supporter"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You've obtained this Accolade by earning every Exploration badge within Cap Au Diable.`}
    ],
    notes: `Visit all exploration badges in [map:${CapAuDiable.key}]`,
    links: [
        {title: "Mad Science Supporter Badge", href: "https://paragonwiki.com/wiki/Mad_Science_Supporter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png"}
    ],
    partials: [
            {key: Sparky.key, type: BadgePartialType.BADGE, badgeKey: Sparky.key},
            {key: MediaJunky.key, type: BadgePartialType.BADGE, badgeKey: MediaJunky.key},
            {key: Egghead.key, type: BadgePartialType.BADGE, badgeKey: Egghead.key},
            {key: Steamed.key, type: BadgePartialType.BADGE, badgeKey: Steamed.key},
            {key: SweetTooth.key, type: BadgePartialType.BADGE, badgeKey: SweetTooth.key},
            {key: DoomSayer.key, type: BadgePartialType.BADGE, badgeKey: DoomSayer.key},
            {key: MasterOfScience.key, type: BadgePartialType.BADGE, badgeKey: MasterOfScience.key},
            {key: CircleGazer.key, type: BadgePartialType.BADGE, badgeKey: CircleGazer.key}
    ]
};