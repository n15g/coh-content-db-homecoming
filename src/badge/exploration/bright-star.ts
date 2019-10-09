import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const BrightStar: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "bright-star",
    names: [{value: "Bright Star"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-2987.0, -36.0, 1820.0],
    badgeText: [{
        value: "The first Luminary used her light-based powers to disrupt the formation of a large portal to the Rikti homeworld on this spot."
    }],
    notes: "The Bright Star Badge is in the Gimry Ridge neighborhood of Steel Canyon. It is on top of one of the perimeter buildings around the Paragon City University building." +
        "\n\nIt is located on a ledge between the northeasternmost building on the campus and the building just west of it.",
    links: [
        {title: "Bright Star Badge", href: "https://paragonwiki.com/wiki/Bright_Star_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
