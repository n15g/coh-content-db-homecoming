import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {SharkheadIsle} from "../../map/sharkhead-isle";

export const RazorToothed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "razor-toothed",
    setTitleId: 295,
    names: [{value: "Razor Toothed"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: SharkheadIsle.key,
    location: [460.0, -14.0, 1653.0],
    badgeText: [{
        value: `This is the spot where Mako paraded Scrapyard's body after he eviscerated him. Many of the locals have seen his ghost in this area.`
    }],
    notes: `Located in [map:${SharkheadIsle.key}], in The Pit neighborhood.

From the Magic Quartermaster, walk due south.
 There is a small beach, and the badge marker is located on a small rock cropping on the south end of that beach, 86 yards due south of the magic Quartermaster.`,
    links: [
        {title: "Razor Toothed Badge", href: "https://paragonwiki.com/wiki/Razor_Toothed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "1"
};
