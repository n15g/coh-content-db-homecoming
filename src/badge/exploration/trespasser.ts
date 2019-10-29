import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {RiktiWarZone} from "../../map/rikti-war-zone";

export const Trespasser: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "trespasser",
    setTitleId: 748,
    names: [{value: "Trespasser"}],
    alignment: ALIGNMENT_ANY,
    mapKey: RiktiWarZone.key,
    location: [978.0, 2.0, -737.0],
    badgeText: [{value: "You have managed to get into the Crey base of operations. Nice work. Now how do you plan to get out?"}],
    notes: "The Trespasser Badge is located in the The Bulge neighborhood of the [map:${RiktiWarZone.key}].\n" +
        "\n" +
        "It is 290 yards southwest of the Bulge marker.\n" +
        "\n" +
        "Look for two Crey logos on a building. It's on the ground in the open on the left hand side of that building, and usually has Crey mobs on top of it or near by it.",
    links: [
        {title: "Trespasser Badge", href: "https://paragonwiki.com/wiki/Trespasser_Badge"},
        {title: "Updated RWZ Vidiot Map", href: "https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}
    ],
    vidiotMapKey: "2"
};
