import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";
import {KingsRow} from "../../map/kings-row";

export const SewerKing: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sewer-king",
    setTitleId: 1832,
    names: [
        {type: Alternate.M, value: "Sewer King"},
        {type: Alternate.F, value: "Sewer Queen"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: SewerNetwork.key,
    location: [2624.0, 0.0, 2176.0],
    badgeText: [{
        value: `By now you've walked so much of the Sewer Network that you know these winding corridors like the back of your hand.
You know its moods and its cycles.
Its odors are no longer offensive as they can offer you a wealth of information relating to the network's health and who is currently stalking through its halls.
The thugs and beasts who call this place home know to fear you, for you are a force to be reckoned with.`
    }],
    notes: `Located in [map:${SewerNetwork.key}] 50 yards east of the [map:${KingsRow.key}] transfer point, on the path leading into the sewers.`,
    links: [
        {title: "Sewer King Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sewer_King_Badge"},
        {title: "Sewer Queen Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sewer_Queen_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
