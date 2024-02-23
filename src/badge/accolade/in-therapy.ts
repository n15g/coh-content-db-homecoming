import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CrystalKeeper} from "../accomplishment/crystal-keeper";
import {LastStand} from "../exploration/last-stand";
import {Strikebreaker} from "../accomplishment/strikebreaker";
import {Triumphant} from "../exploration/triumphant";
import {ManInBlack} from "../defeat/man-in-black";

export const InTherapy: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "in-therapy",
    setTitleId: 537,
    names: [
        {type: Alternate.H, value: "In Therapy"},
        {type: Alternate.V, value: "Megalomaniac"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `In order to get along with the heroes of Paragon City, you've started to see a professional about your desires for world domination.`},
        {type: Alternate.V, value: `You've wanted more control and now you have it. Activating this power increases the power of all of your Sleeps, Holds, Immobilize, and Confuse for 60 seconds.`}
    ],
    notes: `Awards the Megalomaniac power`,
    links: [
        {title: "In Therapy Badge", href: "https://homecoming.wiki/wiki/In_Therapy_Badge"},
        {title: "Megalomaniac Badge", href: "https://homecoming.wiki/wiki/Megalomaniac_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/in-therapy.png"}
    ],
    effect: `Megalomaniac`,
    partials: [
        {key: CrystalKeeper.key, type: BadgePartialType.BADGE, badgeKey: CrystalKeeper.key},
        {key: LastStand.key, type: BadgePartialType.BADGE, badgeKey: LastStand.key},
        {key: ManInBlack.key, type: BadgePartialType.BADGE, badgeKey: ManInBlack.key},
        {key: Strikebreaker.key, type: BadgePartialType.BADGE, badgeKey: Strikebreaker.key},
        {key: Triumphant.key, type: BadgePartialType.BADGE, badgeKey: Triumphant.key}
    ]
};
