import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";

export const BeingAndNothingness: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "being-and-nothingness",
    setTitleId: 1807,
    names: [{value: "Being and Nothingness"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CascadeArchipelago.key,
    location: [3293.0, 1224.0, -3193.0],
    badgeText: [{
        value: "A sense of floating encapsulates you, a lightness of being that does not bring with it feelings of ease or contentment, but of nothingness and insignificance." +
            " Vertigo sends your senses reeling and the urge to leave this place is undeniable. You do not belong here, you are the alien here, and nowhere else is this feeling more acute."
    }],
    notes: "Located in [map:cascade-archipelago] 247 yards SSW of The Air Shoals marker, in the middle of a floating rock.",
    links: [
        {title: "Being and Nothingness Badge", href: "https://paragonwiki.com/wiki/Being_and_Nothingness_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
