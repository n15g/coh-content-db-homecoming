import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {PerezPark} from "../../map/perez-park";

export const JusticeAvenger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "justice-avenger",
    setTitleId: 105,
    names: [
        {type: Alternate.H, value: "Justice Avenger"},
        {type: Alternate.V, value: "Social Climber"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: PerezPark.key,
    location: [-1034.0, 1.0, 3976.0],
    badgeText: [{
        value: "This fountain was a gift to the city, donated by billionaire playboy Justin Sinclair."
    }],
    notes: "Located in [map:perez-park].\n" +
        "\n" +
        "Enter from [map:skyway-city] and turn left, then follow the road to where it ends in a loop around a fountain." +
        " The badge is in the fountain. Its coordinates are (-1034, 1, 3976). It is 246 yards from the [map:skyway-city] entrance.",
    links: [
        {title: "Justice Avenger Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Justice_Avenger_Badge"},
        {title: "Social Climber Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Social_Climber_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
