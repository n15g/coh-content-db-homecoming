import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {CapAuDiable} from "../../map/cap-au-diable";

export const MediaJunky: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "media-junky",
    setTitleId: 270,
    names: [{value: "Media Junky"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: CapAuDiable.key,
    location: [-894.0, 248.0, -1458.0],
    badgeText: [{value: "The top of the WSPDR building is a great place to survey Recluse's media empire."}],
    notes: "If you travel east from the New Haven marker, you will see the large WSPDR tower on the right." +
        " The badge marker is on top of the tower right next to the eastern antenna.",
    links: [
        {title: "Media Junky Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Media_Junky_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "2"
};
