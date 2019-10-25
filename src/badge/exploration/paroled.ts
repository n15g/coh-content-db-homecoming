import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {StMartial} from "../../map/st-martial";

export const Paroled: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "paroled",
    setTitleId: 280,
    names: [
        {type: Alternate.H, value: "Paroled"},
        {type: Alternate.V, value: "Crimelord"},
    ],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: StMartial.key,
    location: [-896.0, 9.0, -1496.0],
    badgeText: [{
        type: Alternate.H, value: `Most of Paragon City agrees that you've paid your debt to society. Most, but not all.`
    }, {
        type: Alternate.V, value: `The weeds of crime bear bitter fruit.`
    }],
    notes: `Located in [map:${StMartial.key}], in the Fortune's Wheel neighborhood.

The marker is 138 yards west of the Fortune's Wheel marker, at the base of a tree in the middle of a broken road leading out of the Black Mariah neighborhood.`,
    links: [
        {title: "Paroled Badge", href: "https://paragonwiki.com/wiki/Paroled_Badge"},
        {title: "Crimelord Badge", href: "https://paragonwiki.com/wiki/Crimelord_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
