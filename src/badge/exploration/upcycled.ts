import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Faultline} from "../../map/faultline";

export const Upcycled: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "upcycled",
    setTitleId: 2405,
    names: [{value: "Upcycled"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: `The Ace Storage facility is where important wreckage that has been retrieved from Aftershock and Overflow is stored. Crates, barrels, and transport vehicles litter the large lot. The Freakshow have started upcycling some of these materials for their own purposes.`}],
    mapKey: Faultline.key,
    location: [932.8, 48.0, 2175.0],
    notes: "SW corner of the map without going into the reservoir. On top of a tower in the Freakshow camp.",
    links: [
        {title: "I25 Faultline badge changes", href: "https://forums.homecomingservers.com/topic/931-echo-falutline-badger-hunter-helpline/"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}
    ],
    vidiotMapKey: "6"
};
