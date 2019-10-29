import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const Ragnarok: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "ragnarok",
    setTitleId: 288,
    names: [{value: "Ragnarok"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [-848.0, -15.0, -352.0],
    badgeText: [{value: "Some say this battle will signal the end of civilization as we know it, and the beginning of a new history—written by Lord Recluse."}],
    notes: "The Ragnarok Badge is located in the [map:${ReclusesVictory.key}] zone in Sector 3." +
        " It is at the north end of a cobblestone walkway on the western side of a small park, 418 yards due south of the Echo pillbox.",
    links: [
        {title: "Ragnaraok Badge", href: "https://paragonwiki.com/wiki/Ragnarok_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "2"
};
