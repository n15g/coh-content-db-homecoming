import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {MonsterIsland} from "../../map/monster-island";
import {Grandville} from "../../map/grandville";

export const TheRoarOfTheBeast: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-roar-of-the-beast",
    setTitleId: 1869,
    names: [{value: "The Roar of the Beast"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: MonsterIsland.key,
    location: [-1938.0, -17.0, -7960.0],
    badgeText: [{
        value: `Once this island was abuzz with human inhabitants and all the noise pollution they produce, but now, as you turn your ear to the wind, the only sounds are the collection of
screeches, howls, and bellowing roars of the monsters that now call this place home.
Arching your back you add your roar to theirs and for a moment they are quiet. What is this new monster who walks among them, invading their hunting grounds? You will show them.`
    }],
    notes: `Located in [map:${MonsterIsland.key}], 265 yards southwest of the [map: ${Grandville.key}] transfer point, on the northernmost beach of the Cutlass Isles.`,
    links: [
        {title: "The Roar of the Beast Badge", href: "https://hcwiki.cityofheroes.dev/wiki/The_Roar_of_the_Beast_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "2"
};
