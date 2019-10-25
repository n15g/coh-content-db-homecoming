import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const LastLineOfDefense: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "last-line-of-defense",
    setTitleId: 1546,
    names: [{value: "Last Line of Defense"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [-965.0, 228.0, 6909.0],
    badgeText: [{
        value: "During the Second Rikti War, this hill was used by heroes as a gathering point to fight off the Rikti in Talos." +
            " Despite the large Rikti numbers, the heroes managed to repel them time after time from this very spot, allowing the rest of Talos Island's citizens to get to safety."
    }],
    notes: "Located on top of the large hill in [map:talos-island], just northwest of the Ouroboros teleport beacon, 169 yards north of the Green Line station.",
    links: [
        {title: "Last Line of Defense Badge", href: "https://paragonwiki.com/wiki/Last_Line_of_Defense_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
