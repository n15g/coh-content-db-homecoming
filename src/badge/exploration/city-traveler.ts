import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoAtlasPark} from "../../map/echo-atlas-park";

export const CityTraveler: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "city-traveler",
    setTitleId: 2368,
    names: [{value: "City Traveler"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `Whether transporting heroes on their way to a mission or civilians to their homes, the Paragon Transit Authority has a record of efficiency and safety second to none.`}],
    mapKey: EchoAtlasPark.key,
    location: [581.5, 74.0, -1363.4],
    notes: `Located inside the Paragon Transit Station, in the west alcove.`,
    links: [
        {title: "Echo: Atlas Park Badge Guide", href: "https://forums.homecomingservers.com/topic/881-echo-atlas-park-badge-guide/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
