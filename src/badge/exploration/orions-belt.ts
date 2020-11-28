import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoGalaxyCity} from "../../map/echo-galaxy-city";

export const OrionsBelt: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "orions-belt",
    setTitleId: 1524,
    names: [{value: "Orion's Belt"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoGalaxyCity.key,
    location: [-1699.0, 4.0, -2209.0],
    badgeText: [{
        value: "This statue commemorates the hero Orion, whom Orion Beltway was renamed after." +
            " During the first Rikti War, Orion fought valiantly against the Rikti, saving the people of this small district." +
            " He was remembered, in particular, as the hero with no real powers beyond his knowledge of martial arts."
    }],
    notes: "Located in the Orion Beltway neighborhood of [map:echo-galaxy-city], at the base of the statue 269 yards ESE of the neighborhood marker.",
    links: [
        {title: "Orion's Belt Badge", href: "https://paragonwiki.com/wiki/Orion%27s_Belt_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
