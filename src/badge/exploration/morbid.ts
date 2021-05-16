import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNova} from "../../map/underground-nova";

export const Morbid: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "morbid",
    setTitleId: 1639,
    names: [{value: "Morbid"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNova.key,
    location: [-1280.0, 640.0, -3024.0],
    badgeText: [{
        value: "You have discovered the nearly forgotten sub-sub-basement of the hospital morgue, long since abandoned due to an infestation of Ghouls." +
            " Perhaps here you can learn something of lividity, morbidity, and the proclivities of the near dead."
    }],
    notes: "Located in [map:underground-nova] approximately 348 yards NNE of the Imperial Tunnel access point.",
    links: [
        {title: "Morbid Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Morbid_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "4"
};
