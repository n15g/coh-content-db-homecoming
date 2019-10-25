import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const Sparky: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sparky",
    setTitleId: 269,
    names: [{value: "Sparky"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-2432.0, 294.0, -1248.0],
    badgeText: [{value: "You've spent time wandering around in the Power Transport System at Mount Diable."}],
    notes: "The Sparky Badge is in the Power Transport System station in Mount Diable in Cap au Diable." +
        " There is a building with two large electrical quad-towers on it." +
        " The badge marker is on top of the building right in the middle of those two towers.",
    links: [
        {title: "Sparky Badge", href: "https://paragonwiki.com/wiki/Sparky_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
