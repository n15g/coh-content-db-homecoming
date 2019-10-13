import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MonsterIsland} from "../../map/monster-island";

export const GrimFandango: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "grim-fandango",
    names: [{value: "Grim Fandango"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MonsterIsland.key,
    location: [-1498.0, 0.0, -6344.0],
    badgeText: [{
        value: `You've read the briefs describing how hordes of Rikti Monkeys had been observed taking down much, much larger game and now you have found evidence to support that thesis.
Rikti monkeys dance among the bones, playing strange, captivating rhythms upon them, delighting in their accomplishment.
Then they turn their gaze upon you, sizing you up, and you imagine that they're wondering just what your ribcage would sound like played like a xylophone, your kneecaps clapped like castanets,
and what your skull would look like smeared with Rikti Monkey dung.`
    }],
    notes: `Located in [map:${MonsterIsland.key}], 280 yards southwest of the Cutlass Isles marker, next to a large pile of bones.`,
    links: [
        {title: "Grim Fandango Badge", href: "https://paragonwiki.com/wiki/Grim_Fandango_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
