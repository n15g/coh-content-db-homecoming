import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const EscapeArtist: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "escape-artist",
    setTitleId: 636,
    names: [{value: "Escape Artist"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Dr. Hank Neville, foremost geologist, was attacked by Arachnos, but escaped with the help of Freedom Corps troops.`},
        {type: Alternate.V, value: `This is the spot where geologist Dr. Hank Neville narrowly escaped Arachnos capture, aided by interfering Freedom Corps troops.`}
    ],
    mapKey: Faultline.key,
    location: [-679.0, -167.0, -208.0],
    notes: "In [map:${Faultline.key}], halfway between Freight Lifts B and C, there is a crevasse to the north. The badge marker is at the end of the bottom of that crevasse.",
    links: [
        {title: "Escape Artist Badge", href: "https://homecoming.wiki/wiki/Escape_Artist_Badge"},
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "2"
};
