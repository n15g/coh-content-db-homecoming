import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {AtlasPark} from "../../map/atlas-park";

export const Observant: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "observant",
    setTitleId: 1516,
    names: [{value: "Observant"}],
    alignment: ALIGNMENT_HERO,
    mapKey: AtlasPark.key,
    location: [-135.0, -94.0, 470.0],
    badgeText: [{
        value: "Vanguard only allows super-powered heroes and Vanguard officials into their compounds." +
            " Although Vanguard scientists become annoyed when people look in on their various Rikti experiments, it is really their own fault for not having curtains to cover up the window."
    }],
    notes: "The Observant Badge is located in the Vanguard building in [map:atlas-park].\n" +
        "\n" +
        "It is outside a room where scientists can be seen performing experiments.",
    links: [
        {title: "Observant Badge", href: "https://homecoming.wiki/wiki/Observant_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "8"
};
