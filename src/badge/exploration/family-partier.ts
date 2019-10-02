import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {IndependencePort} from "../../map/independence-port";

export const FamilyPartier: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "family-partier",
    names: [{value: "Family Partier"}],
    alignment: ALIGNMENT_HERO,
    mapKey: IndependencePort.key,
    location: [-12.0, -21.0, 2376.0],
    badgeText: [{
        value: "The Family uses this area right in the shadow of Terra Volta to conduct various parties, and the occasional hit on one of their own." +
            " They've also been searching for secret entrances into the reactor, though so far they have been unsuccessful."
    }],
    notes: "The Family Partier Badge is in the Power Island neighborhood of Independence Port." +
        "\n\nIt is at the bottom of the boardwalk ramp on the south side of the island.",
    links: [
        {title: "Family Partier Badge", href: "https://paragonwiki.com/wiki/Family_Partier_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "6"
};
