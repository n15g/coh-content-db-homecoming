import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const TheOldMe: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-old-me",
    setTitleId: 1547,
    names: [{value: "The Old Me"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [-1184.0, 7.0, 2132.0],
    badgeText: [{
        value: "This area is where the real Ajax was buried, after being killed by the thug Ralph Valetti, who stole his identity as well as his powers." +
            " After the revelation was made, officials rushed to recover Ajax's body, which is now preserved in an unknown area within the city."
    }],
    notes: "Located on the southwestern shore of the beach inside Circe Island in [map:talos-island], 73 yards west of the neighborhood marker.",
    links: [
        {title: "The Old Me Badge", href: "https://homecoming.wiki/wiki/The_Old_Me_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
