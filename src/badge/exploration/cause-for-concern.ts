import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const CauseForConcern: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cause-for-concern",
    setTitleId: 1573,
    names: [{value: "Cause for Concern"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [-1767.0, -208.0, -3746.0],
    badgeText: [{
        value: "Visitors to Portal Corp are usually a little concerned when they see these defensive outposts put up near the elevators down to the portals." +
            " Tour guides insist they are \"just for show\", though the occasional \"all clear\" heard from military radios nearby doesn't help much."
    }],
    notes: "Located under the metal detector in the lobby of the center Portal Corp building in [map:peregrine-island].",
    links: [
        {title: "Cause for Concern Badge", href: "https://paragonwiki.com/wiki/Cause_for_Concern_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
