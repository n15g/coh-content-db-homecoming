import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundImperial} from "../../map/underground-imperial";

export const EyesOfTheDark: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "eyes-of-the-dark",
    names: [{value: "Eyes of the Dark"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundImperial.key,
    location: [-1246.0, 335.0, -2429.0],
    badgeText: [{
        value: "From this vantage point you can watch the Resistance come and go from their subterranean redoubt." +
            " You are the eyes in the dark, observing their movements." +
            " Are you their guardian, watching over them, or are you the predator, looking for the optimal time to strike?"
    }],
    notes: "Located in [map:underground-imperial] 95 feet from the door to the Resistance Hub.",
    links: [
        {title: "Eyes of the Dark Badge", href: "https://paragonwiki.com/wiki/Eyes_of_the_Dark_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
