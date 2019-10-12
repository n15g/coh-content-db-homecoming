import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";

export const Castaway: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "castaway",
    names: [{value: "Castaway"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CascadeArchipelago.key,
    location: [2523.0, 1676.0, 2985.0],
    badgeText: [{
        value: "You stand on the brink, a psychological one, overwhelmed by a sense of dislocation and loss that is nearly impossible to shake." +
            " The scientists manning Firebase Zulu have codenamed this region \"The Marooned Shores,\" and you can see why this name is appropriate." +
            " You feel as though you have washed ashore in a hostile land, cast off from everything you know. You fear, for an instant, that you will never again find the way home." +
            " You fight down this irrational fear and move on, lest it consume you."
    }],
    notes: "Located in [map:cascade-archipelago] 588 yards south of The Marooned Shores marker, at the base of the hills on the island's southern edge.",
    links: [
        {title: "Castaway Badge", href: "https://paragonwiki.com/wiki/Castaway_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
