import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";

export const NoTurningBackNow: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "no-turning-back-now",
    setTitleId: 1811,
    names: [{value: "No Turning Back Now"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CascadeArchipelago.key,
    location: [1010.0, 2196.0, -5653.0],
    badgeText: [{
        value: "Gravity operates strangely in the Shadow Shard, but more than just the floating masses of rock, there is a gravity here of a more spiritual kind." +
            " You feel it drawing you inexorably forward towards an unknown destiny." +
            " All thoughts of retreat are discarded as counterproductive, there is no other course of action but to press on." +
            " You've been caught in an unseen orbit, around a power you cannot possibly fathom."
    }],
    notes: "Located in [map:cascade-archipelago] 0.53 miles SW of the Tyrant's Rock marker, at the base of the geyser on the floating rock.\n" +
        "\n" +
        "To reach it, go approximately 367 yards NNE of the Tyrant's Rock marker, and then straight down.",
    links: [
        {title: "No Turning Back Now Badge", href: "https://paragonwiki.com/wiki/No_Turning_Back_Now_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
