import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const WentworthHistoryBuff: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "wentworth-history-buff",
    setTitleId: 1526,
    names: [{value: "Wentworth History Buff"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [-1089.0, -42.0, 896.0],
    badgeText: [{
        value: "This area was slated to be the original site for the Wentworth's Consignments in Kings Row." +
            " Unfortunately, constant debates over who actually owns the site, as well as the neighborhood's concern over increased traffic, halted construction."
    }],
    notes: "The Wentworth History Buff Badge is at the entrance of the construction site 155 yards north of Wentworth's.",
    links: [
        {title: "Wentworth History Buff Badge", href: "https://homecoming.wiki/wiki/Wentworth_History_Buff_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
