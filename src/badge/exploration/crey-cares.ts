import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const CreyCares: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "crey-cares",
    setTitleId: 1794,
    names: [{value: "Crey Cares"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [3263.0, 104.0, 1279.0],
    badgeText: [{
        value: "Crey Industries has taken over this island in the Water Processing district with the intention of using its extensive collection and filtration infrastructure to spearhead a plan" +
            " that would clear from the air and water the strange toxic element that emerged after the Rikti invasion." +
            " But those who know the truth, and are not intimidated into silence, know that Crey is actually collecting and concentrating this element for unknown purposes."
    }],
    notes: "Located in [map:creys-folly] 160 yards WSW of the Paragon Water Works marker, on top of the ducts running between the cooling towers.",
    links: [
        {title: "Crey Cares Badge", href: "https://homecoming.wiki/wiki/Crey_Cares_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
