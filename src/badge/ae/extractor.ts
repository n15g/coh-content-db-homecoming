import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Extractor: IBadgeData = {
    type: BadgeType.AE,
    key: "extractor",
    setTitleId: 1240,
    names: [
        {value: "Extractor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've rescued or kidnapped your first hostage during an Architect mission, earning yourself the Extractor badge."}],
    acquisition: "Rescue one required captive while on a Mission Architect mission.",
    links: [
        {title: "Extractor Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Extractor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/extractor.png"}]
};
