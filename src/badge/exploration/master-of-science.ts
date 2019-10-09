import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const MasterOfScience: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "master-of-science",
    names: [{value: "Master of Science"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-446.0, 430.0, -328.0],
    badgeText: [{value: "Dr. Aeon designed this giant globe of an atom to signify the advances that science has brought to Cap au Diable."}],
    notes: "The Master of Science Badge is located on top of the globe in the Aeon City neighborhood of Cap au Diable.",
    links: [
        {title: "Master of Science Badge", href: "https://paragonwiki.com/wiki/Master_of_Science_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "7"
};
