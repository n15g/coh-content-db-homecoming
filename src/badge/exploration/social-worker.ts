import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const SocialWorker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "social-worker",
    names: [
        {type: Alternate.H, value: "Social Worker"},
        {type: Alternate.V, value: "Slumlord"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-202.0, -74.0, -852.0],
    badgeText: [{
        value: `These slums are known to house people who have lost everything at the Golden Giza. These wanderers have become large enough in numbers to form their own community.`
    }],
    notes: `Located in [map:${StMartial.key}], in the Black Mariah neighborhood.

It is at the entrance of the underground slums 185 yards northeast of the neighborhood marker.`,
    links: [
        {title: "Social Worker Badge", href: "https://paragonwiki.com/wiki/Social_Worker_Badge"},
        {title: "Slumlord Badge", href: "https://paragonwiki.com/wiki/Slumlord_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
