import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const ShadesOfArachnos: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "shades-of-arachnos",
    setTitleId: 1576,
    names: [{value: "Shades of Arachnos"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [-2535.0, -1.0, -8276.0],
    badgeText: [{
        value: "You could swear that you just saw a submarine off the coast of this island...but it's gone now. It was probably just your imagination."
    }],
    notes: "Located in the Cutlass Isles neighborhood of [map:peregrine-island] on the northeast shore of the small northernmost island.\n" +
        "\n" +
        "Be Careful: Approaching this badge will bring you into close proximity of Devouring Earth Monsters.",
    links: [
        {title: "Shades of Arachnos Badge", href: "https://paragonwiki.com/wiki/Shades_of_Arachnos_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "6"
};
