import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const DarkOmen: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dark-omen",
    setTitleId: 1578,
    names: [{value: "Dark Omen"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [351.0, -18.0, -8978.0],
    badgeText: [{
        value: "These battered bones are all that remains of a foolhardy adventurer who sought to explore this island full of monsters." +
            " No one has tried to identify them, as the people of Peregrine Island are too terrified of this island to even go near it."
    }],
    notes: "Located in the Tempest Quay neighborhood of [map:peregrine-island] on the southwest shore of the northern island.\n" +
        "\n" +
        "Be Careful: Approaching this badge will bring you into close proximity of Devouring Earth Monsters.",
    links: [
        {title: "Dark Omen Badge", href: "https://paragonwiki.com/wiki/Dark_Omen_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
