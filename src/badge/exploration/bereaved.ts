import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Bereaved: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "bereaved",
    setTitleId: 1817,
    names: [{value: "Bereaved"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [-1574.0, 1764.0, 6657.0],
    badgeText: [{
        value: "You live in a dangerous world. Beset on all sides by foes that wish to destroy you and all you hold dear." +
            " You've seen countless friends and comrades fall in battle. You've seen their bodies burnt, their minds warped, their bones broken." +
            " You've heard their cries of pain and fear and echoed it with your own." +
            " How many have fallen by the wayside, unable to carry on in the face of such daunting odds, who've had their spirits broken by the constant toil, the never-ending hordes of" +
            " villainous enemies who never tire and never give up?"
    }],
    notes: "Located in [map:the-chantry] 538 SSE of the Bastion of Sorrow marker, on the south edge of the small island to the south of the neighborhood's main island.",
    links: [
        {title: "Bereaved Badge", href: "https://homecoming.wiki/wiki/Bereaved_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
