import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const KingOfPain: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "king-of-pain",
    setTitleId: 1813,
    names: [
        {type: Alternate.M, value: "King of Pain"},
        {type: Alternate.F, value: "Queen of Pain"}
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [4131.0, 390.0, -2159.0],
    badgeText: [{
        value: "Pain! Every nerve flares with it. Your body sings with a crystalline agony that is transcendent in its intensity." +
            " But this is not a pain that makes you whimper like a struck animal, it makes you growl with fury at the indignity of it." +
            " It is a lesson, a challenge to be conquered, to remain unbowed and ultimately triumph over it." +
            " But in a moment it is gone though the memory of it lingers, as does the conviction that you were the master of it."
    }],
    notes: "Located in [map:the-chantry] 463 yards SE of the Bastion of Pain marker, on a rock on the shore of the red lake.",
    links: [
        {title: "King of Pain Badge", href: "https://hcwiki.cityofheroes.dev/wiki/King_of_Pain_Badge"},
        {title: "Queen of Pain Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Queen_of_Pain_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
