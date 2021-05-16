import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const RiktiGoneWild: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "rikti-gone-wild",
    setTitleId: 1575,
    names: [{value: "Rikti Gone Wild"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [-2893.0, 0.0, -6950.0],
    badgeText: [{
        value: "The horde of Rikti Monkeys on Monster Island seems to have been confined to this area, supposedly by Crey." +
            " Investigations into what exactly went wrong have been going on for some time." +
            " Many suspect that the Devouring Earth assaulted the island, destroying the barriers put in place to keep the Rikti in."
    }],
    notes: "Located in the Cutlass Isles neighborhood of [map:peregrine-island].\n" +
        "\n" +
        "It is at a section of ruined gate 241 yards ENE of the neighborhood marker.",
    links: [
        {title: "Rikti Gone Wild Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Rikti_Gone_Wild_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "5"
};
