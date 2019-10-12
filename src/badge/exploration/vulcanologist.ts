import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const Vulcanologist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vulcanologist",
    names: [{value: "Vulcanologist"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-5346.0, 875.0, -796.0],
    badgeText: [{
        value: "The Council has hollowed out this dormant volcano to build a massive factory. The creations within are guarded with the utmost secrecy."
    }],
    notes: "Located in [map:striga-isle] on the southwestern lip of the large volcano in the center of the Council Base neighborhood.\n" +
        "\n" +
        "It is approximately 46 yards from the Council Base marker.",
    links: [
        {title: "Vulcanologist Badge", href: "https://paragonwiki.com/wiki/Vulcanologist_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
