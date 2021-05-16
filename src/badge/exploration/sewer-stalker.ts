import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";
import {SkywayCity} from "../../map/skyway-city";

export const SewerStalker: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "sewer-stalker",
    setTitleId: 1833,
    names: [{value: "Sewer Stalker"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SewerNetwork.key,
    location: [64.0, 2.0, 2995.0],
    badgeText: [{
        value: `The sewers are full of predators.
They stalk the shadows and strike without warning, preying upon each other and upon those foolish enough to trespass upon their hunting grounds.
You are one of those, yet you have the power to turn the tables against them.
Where they hunt, you hunt. Where they lurk, you are the eyes in the darkness watching them.
You are the predator that they now fear, it is the stories of your exploits they use as cautionary tales among themselves.`
    }],
    notes: `Located in [map:${SewerNetwork.key}] 49 yards north of the [map:${SkywayCity.key}] transfer point, straight back from the entrance.`,
    links: [
        {title: "Sewer Stalker Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Sewer_Stalker_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
