import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const Fugitive: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "fugitive",
    setTitleId: 1566,
    names: [{value: "Fugitive"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-3821.0, -47.0, -181.0],
    badgeText: [{
        value: "When a fugitive escapes from the Zig, this area is the first place that the PPD patrol." +
            " The Freakshow frequently make deals with inmates - they'll hold off the PPD if the escapees join the Freakshow." +
            " This either leads to the Freakshow increasing their ranks or hunting down the fugitives who break their end of the bargain."
    }],
    notes: "Located at the north entrance of the Dark Waters neighborhood in [map:brickstown], 196 yards north of the neighborhood marker.",
    links: [
        {title: "Fugitive Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Fugitive_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
