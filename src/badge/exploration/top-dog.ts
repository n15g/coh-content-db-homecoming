import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const TopDog: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "top-dog",
    setTitleId: 90,
    names: [{value: "Top Dog"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [131.0, 320.0, -319.5],
    badgeText: [{
        value: "The top of Atlas' statue is the first place many flying heroes will go."
    }],
    notes: "Located in the Atlas Plaza neighborhood of [map:atlas-park].\n" +
        "\n" +
        "It is at the apex of the globe that the Atlas statue just in front of City Hall is holding.\n" +
        "\n" +
        "Requires fly, superjump, or teleport, or to arrange to have another hero transport them to the badge marker.",
    links: [
        {title: "Top Dog Badge", href: "https://paragonwiki.com/wiki/Top_Dog_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
