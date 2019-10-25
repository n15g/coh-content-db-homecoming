import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ReclusesVictory} from "../../map/recluses-victory";

export const LastStand: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "last-stand",
    setTitleId: 290,
    names: [{value: "Last Stand"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ReclusesVictory.key,
    location: [1083.0, 0.0, -136.0],
    badgeText: [{value: "Lee Towers may go down in history as the place where civilization fell to Lord Recluse."}],
    notes: "The Last Stand Badge is located in the Recluse's Victory zone in Sector 2." +
        " It is under the monorail track behind a store approximately halfway between the Foxtrot and Golf pillboxes (but slightly closer to Foxtrot).",
    links: [
        {title: "Last Stand Badge", href: "https://paragonwiki.com/wiki/Last_Stand_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ],
    vidiotMapKey: "4"
};
