import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {CascadeArchipelago} from "../../map/cascade-archipelago";

export const TheHeartOfMemory: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-heart-of-memory",
    names: [{value: "The Heart of Memory"}],
    alignment: ALIGNMENT_HERO,
    mapKey: CascadeArchipelago.key,
    location: [-1814.0, 3032.0, 128.0],
    badgeText: [{
        value: "You have found the source of the Crimson Falls." +
            " Scientists who have studied it have only theories as to its source and composition, but they are in agreement that it is not entirely of this dimension." +
            " Some think that perhaps it is a form of quantum foam; exotic particles and degenerate matter drawn to the Shadow Shard from other dimensions." +
            " Swimming through it you find that it offers little resistance, does not make you wet, and while immersed in it you find yourself recalling past events." +
            " These recollections become fleeting, as though drawn from you to suffuse the fluid." +
            " One memory follows another and as each one does, it becomes increasingly difficult to bring them back." +
            " You fear that were you to stay here much longer, the fluid would empty you of all memory."
    }],
    notes: "Located in [map:cascade-archipelago] 544 yards NE of the Crimson Falls marker, in the middle of a lake.",
    links: [
        {title: "The Heart of Memory Badge", href: "https://paragonwiki.com/wiki/The_Heart_of_Memory_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
