import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TalosIsland} from "../../map/talos-island";

export const Minotaur: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "minotaur",
    setTitleId: 125,
    names: [{value: "Minotaur"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TalosIsland.key,
    location: [1698.0, 16.0, 7697.0],
    badgeText: [{
        value: "While wrestling with the Chimera in the waters of the bay, Talos tore a rift in the ocean floor." +
            " Although the hero never rose from the waters, the island that formed was named in his honor."
    }],
    notes: "Located on the pedestal of the large minotaur statue, directly in front of the Field Analyst, approximately 580 yards southwest of the New Thebes neighborhood marker.",
    links: [
        {title: "Minotaur Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Minotaur_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "1"
};
