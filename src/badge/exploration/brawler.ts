import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const Brawler: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "brawler",
    setTitleId: 93,
    names: [{value: "Brawler"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-1184.0, 63.0, -936.0],
    badgeText: [{value: "Back Alley Brawler fought against two Underbosses from The Family, Slow Eye Lou and Hyper Mike, on this spot."}],
    notes: "The Brawler Badge is located 156 yards ESE from the Arena in Echo: Galaxy City on top of the Mighty Mart." +
        "\n\nNon-airborne heroes can get to the badge by climbing up a fire escape on the City of Gyros building, two buildings behind (east of) the Mighty Mart building, and jumping across rooftops." +
        " The buildings in question are immediately east of the Arena.",
    links: [
        {title: "Brawler Badge", href: "https://homecoming.wiki/wiki/Brawler_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "3"
};
