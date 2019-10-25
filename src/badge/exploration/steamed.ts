import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const Steamed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "steamed",
    setTitleId: 272,
    names: [{value: "Steamed"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-2426.0, 224.0, -472.0],
    badgeText: [{value: "Volcanic activity around Mount Diable causes a lot of steamy venting. Watch out or it's lobster time."}],
    notes: "The badge marker is 88 feet southeast of the Mount Diable marker. It is located just east of a couple of towers holding up large pipes.",
    links: [
        {title: "Steamed Badge", href: "https://paragonwiki.com/wiki/Steamed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "4"
};
