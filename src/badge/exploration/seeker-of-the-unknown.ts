import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const SeekerOfTheUnknown: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "seeker-of-the-unknown",
    setTitleId: 129,
    names: [{value: "Seeker of the Unknown"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [1868.0, -80.0, 1352.0],
    badgeText: [{
        value: "This tomb was used to represent the thousands of heroes who gave their lives in the Rikti War. It now stands a mute vigil at the site of even greater atrocities."
    }],
    notes: "Located in [map:echo-dark-astoria] 160 yards west, and very slightly north, of the Moth Cemetery marker is a deep chasm.\n" +
        "\n" +
        "At the bottom of that chasm is a doorway that leads into a tunnel. The badge marker is outside the second (middle) crypt in that tunnel.",
    links: [
        {title: "Seeker of the Unknown Badge", href: "https://homecoming.wiki/wiki/Seeker_of_the_Unknown_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
