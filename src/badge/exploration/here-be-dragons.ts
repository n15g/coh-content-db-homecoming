import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheAbyss} from "../../map/the-abyss";

export const HereBeDragons: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "here-be-dragons",
    setTitleId: 1862,
    names: [{value: "Here Be Dragons"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheAbyss.key,
    location: [-236.0, -43.0, 352.0],
    badgeText: [{
        value: `This once was a place of amusement and adventure, a place for people to get up close and personal with real monsters.
What fools. The hubris on display here is staggering and you have to suppress the urge to snicker at the fate that befell them.
You deal with monsters all the time, literally and figuratively, and the last thing you'd do is treat them like some kind of side-show attraction for the kiddies.
You can't help but put yourself in the monsters' place; you'd have smashed and devoured these puny little humans too.`
    }],
    notes: `Located in [map:${TheAbyss.key}], 195 yards northeast of the Grandville transfer point, at the base of the large gate along the path leading from the submarine.`,
    links: [
        {title: "Here Be Dragons Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Here_Be_Dragons_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
