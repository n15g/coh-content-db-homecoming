import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const VirtualExtractor: IBadgeData = {
    type: BadgeType.AE,
    key: "virtual-extractor",
    setTitleId: 1245,
    names: [
        {value: "Virtual Extractor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've rescued or kidnapped your first hostage during Test Mode, earning yourself the Virtual Extractor badge."}],
    acquisition: "Rescue one captive while running a Architect mission in test mode.",
    links: [
        {title: "Virtual Extractor Badge", href: "https://homecoming.wiki/wiki/Virtual_Extractor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtual-extractor.png"}]
};
