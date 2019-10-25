import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AbandonedSewerNetwork} from "../../map/abandoned-sewer-network";
import {SewerNetwork} from "../../map/sewer-network";

export const FromBeneathYou: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "from-beneath-you",
    setTitleId: 1826,
    names: [{value: "From Beneath You"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AbandonedSewerNetwork.key,
    location: [-3264.0, 0.0, 1408.0],
    badgeText: [{
        value: "Amidst the hustle and bustle of Atlas Park, with masses of super-powered individuals going to and fro, it is easy to forget the miles of tunnels and chambers that underlie" +
            " that district." +
            " People go about their daily business unaware of the thriving ecology that takes place beneath their feet." +
            " Vahzilok, Hydra, Hellions, and worse skulk in the shadows, going about their own dark business while the citizens of Atlas Park shrug off the notion that danger lurks a" +
            " handful of yards away."
    }],
    notes: `Located in [map:abandoned-sewer-network] 80 feet southwest of the [${SewerNetwork.key}] transfer point in Atlas Park Sector, right at the exit of the room.`,
    links: [
        {title: "From Beneath You Badge", href: "https://paragonwiki.com/wiki/From_Beneath_You_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
