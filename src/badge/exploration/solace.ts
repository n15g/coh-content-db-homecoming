import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SkywayCity} from "../../map/skyway-city";

export const Solace: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "solace",
    setTitleId: 111,
    names: [{value: "Solace"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SkywayCity.key,
    location: [2260.0, -84.0, -3367.0],
    badgeText: [{
        value: "This was the location of Dr. Anguish's secret lab, uncovered by the Freedom Phalanx when he threatened to blow up Paragon City with a black market Soviet nuke."
    }],
    notes: "From the front door of the Freedom Corp Basic Training store on the southern border of the Astral District neighborhood of Skyway City, walk around the left (south) side of the store in" +
        " the small space between the store wall and the wall with the road on top. Follow the wall on your left along the border of the Astral District until you see a red truck." +
        "\n\nThe badge marker is behind and just to the right of the truck, 116 yards due west of the Freedom Corp Basic Training store.",
    links: [
        {title: "Solace Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Solace_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "2"
};
