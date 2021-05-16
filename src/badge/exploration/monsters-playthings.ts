import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MonsterIsland} from "../../map/monster-island";

export const MonstersPlaythings: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "monsters-playthings",
    setTitleId: 1871,
    names: [{value: "Monsters' Playthings"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MonsterIsland.key,
    location: [-1300.0, 0.0, -7608.0],
    badgeText: [{
        value: `About you lies shattered heavy machinery, evidence of the power the Devouring Earth monsters possess.
Hulks of metal weighing tons have been tossed about and shredded like a dog's chew toy.
You can only imagine what they did to the island's former masters. You vow to not let the same happen to you.`
    }],
    notes: `Located in [map:${MonsterIsland.key}], 388 yards northwest of the Cutlass Isles marker, between the cluster of boxes just off the northwest corner of the two elongated buildings.`,
    links: [
        {title: "Monsters' Playthings Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Monsters%27_Playthings_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "4"
};
