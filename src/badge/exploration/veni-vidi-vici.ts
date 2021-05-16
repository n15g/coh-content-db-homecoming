import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CreysFolly} from "../../map/creys-folly";

export const VeniVidiVici: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "veni-vidi-vici",
    setTitleId: 1793,
    names: [{value: "Veni, Vidi, Vici"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CreysFolly.key,
    location: [5439.0, 609.0, 3145.0],
    badgeText: [{
        value: "This imposing structure was built to house the main administrative offices of the Venice Industrial Development Initiative (V.I.D.I.)." +
            " When the Rikti invaded they quickly swarmed through the building and assumed complete control." +
            " They used the information contained to further their goals of capturing the region while also using its tactical vantage point to coordinate strikes throughout Paragon City."
    }],
    notes: "Located in [map:creys-folly] 310 yards West of the Tangle Town marker, next to the aircraft warning light on the roof of the building.",
    links: [
        {title: "Veni, Vidi, Vici Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Veni,_Vidi,_Vici_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
