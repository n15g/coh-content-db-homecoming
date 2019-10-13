import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const EscapeArtist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "escape-artist",
    names: [{value: "Escape Artist"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Faultline.key,
    location: [-679.0, -167.0, -208.0],
    badgeText: [{value: "The dread pirate Randall set up this lighthouse to lure ships to their demise."}],
    notes: "The Piratical Badge marker is located in a grassy area close the water on the villain base island west of the base in Siren's Call.",
    links: [
        {title: "Escape Artist Badge", href: "https://paragonwiki.com/wiki/Escape_Artist_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
