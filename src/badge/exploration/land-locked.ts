import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const LandLocked: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "land-locked",
    setTitleId: 95,
    names: [{value: "Land Locked"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-2036.0, -43.0, 1000.0],
    badgeText: [{value: "This lock holds back the waters of Eastgate Bay, and has been the target of many super criminals bent on flooding Galaxy City."}],
    notes: "The Land Locked Badge is located in the Gemini Park neighborhood in Echo: Galaxy City." +
        "\n\nIt is in the middle of the large steel doors on the eastern wall of the zone, 270 yards south of the entrance to Perez Park.",
    links: [
        {title: "Land Locked Badge", href: "https://homecoming.wiki/wiki/Land_Locked_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
