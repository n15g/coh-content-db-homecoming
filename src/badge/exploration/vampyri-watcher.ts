import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {StrigaIsle} from "../../map/striga-isle";

export const VampyriWatcher: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "vampyri-watcher",
    setTitleId: 1790,
    names: [{value: "Vampyri Watcher"}],
    alignment: ALIGNMENT_HERO,
    mapKey: StrigaIsle.key,
    location: [-3728.0, 424.0, -3011.0],
    badgeText: [{
        value: "The Council's Vampyri corps are a breed apart from the rest of the Council's cadre—both in appearance and temperament." +
            " They hold themselves above their brethren and have taken this high hilltop as their own private roost, a place providing them a tactical view of the Council base and" +
            " its surroundings, while also giving them a physical location that they alone command." +
            " Other Council know never to go there lest they incite the ire of their temperamental brothers-in-arms."
    }],
    notes: "Located in [map:striga-isle] 464 yards NNE of The Wolf's Throat marker, at the top of the hill.",
    links: [
        {title: "Vampyri Watcher Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Vampyri_Watcher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "8"
};
