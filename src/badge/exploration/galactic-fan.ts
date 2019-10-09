import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const GalacticFan: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "galactic-fan",
    names: [{value: "Galactic Fan"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [920.0, 32.0, -832.0],
    badgeText: [{
        value: "Galaxy Girl's sacrifice to save the people of Paragon City has not gone unnoticed, prompting this tremendous statue to be built in honor of her." +
            " Galaxy Girl's father visited the statue every day until he passed away at the age of 91."
    }],
    notes: "The Galactic Fan Badge is located in the Freedom Court neighborhood of Echo: Galaxy City. It is at the base of the statue of Galaxy Girl directly behind Freedom Corps Headquarters.",
    links: [
        {title: "Galactic Fan Badge", href: "https://paragonwiki.com/wiki/Galactic_Fan_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
