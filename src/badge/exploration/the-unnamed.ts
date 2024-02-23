import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const TheUnnamed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-unnamed",
    setTitleId: 1788,
    names: [{value: "The Unnamed"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-2381.0, -31.0, -2285.0],
    badgeText: [{
        value: "It was not long ago that a Council patrol reported a grave exhumation in the Bonny Morass." +
            " No culprits were found, and no records existed to indicate who once was laid to rest here, but many mark this incident as the start of the Banished Pantheon's presence on Striga Isle." +
            " Late at night, minions of the Banished Pantheon have been spotted congregating around this gravesite, leading the Council to believe they exhumed it." +
            " But others in the Council believe that whatever was in the grave emerged under their own power, and that such a being could have called the Banished Pantheon to the Isle" +
            " for some unknown purpose. This hypothetical adversary is code-named in the Council logs as 'The Unnamed.'"
    }],
    notes: "Located in [map:striga-isle] 78 yards east of the Bonny Morass marker, inside an open grave.",
    links: [
        {title: "The Unnamed Badge", href: "https://homecoming.wiki/wiki/The_Unnamed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
