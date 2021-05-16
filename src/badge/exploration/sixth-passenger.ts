import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Brickstown} from "../../map/brickstown";

export const SixthPassenger: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sixth-passenger",
    setTitleId: 1569,
    names: [{value: "Sixth Passenger"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Brickstown.key,
    location: [-2810.0, -43.0, 2569.0],
    badgeText: [{
        value: "Sebastian Frost hid in the trunk of this old car for three days after he was broken out from the Zig." +
            " It was after the third day, under the cover of night, that his goons in the Family were able to come rescue him." +
            " Frost has been extra careful ever since then to never get caught again."
    }],
    notes: "Located along the south edge of [map:brickstown], 390 yards southwest of the Science store.\n" +
        "\n" +
        "There is a section of road that has been built over the ruined foundations of some buildings, and the badge is located near a blue car that is buried under there.",
    links: [
        {title: "Sixth Passenger Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sixth_Passenger_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
