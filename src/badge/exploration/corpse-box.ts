import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {Boomtown} from "../../map/boomtown";

export const CorpseBox: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "corpse-box",
    names: [{value: "Corpse Box"}],
    alignment: ALIGNMENT_HERO,
    mapKey: Boomtown.key,
    location: [-4516.0, 1.0, -1262.0],
    badgeText: [{
        value: "The stench of death clings to this forlorn cargo container. The Vahzilok are rumored to store corpses there for later use in their blasphemous experiments." +
            " It is difficult to argue what is more horrific: a cargo container stuffed with dead bodies, or one that is empty—indicating that the Vahizilok have a new crop of cadaverous" +
            " servitors roaming the streets to do their dark bidding."
    }],
    notes: "This badge is in a cargo crate in the extreme northeast corner of the map.",
    links: [
        {title: "Corpse Box Badge", href: "https://paragonwiki.com/wiki/Corpse_Box_Badge"}
    ],
    imageKeys: [{value: "core.exploration.hero"}],
    vidiotMapKey: "8"
};
