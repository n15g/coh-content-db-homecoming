import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const Patriot: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "patriot",
    setTitleId: 89,
    names: [
        {type: Alternate.H, value: "Patriot"},
        {type: Alternate.V, value: "International Spy"},
    ],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [162.0, -768.0, -678.0],
    badgeText: [{
        value: "You have seen the statue of Cassiopeia, a Heroine recognized as a citizen of every country on Earth after she single-handedly saved the world from a rogue comet."
    }],
    notes: "Located in the Atlas Plaza neighborhood of Atlas Park.\n" +
        "\n" +
        "The badge marker is inside City Hall, just in front of the statue located just left (west) of the supergroup registration desk.",
    links: [
        {title: "Patriot Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Patriot_Badge"},
        {title: "International Spy Badge", href: "https://hcwiki.cityofheroes.dev/wiki/International_Spy_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
