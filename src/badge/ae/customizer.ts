import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Customizer: IBadgeData = {
    type: BadgeType.AE,
    key: "customizer",
    names: [
        {value: "Customizer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've saved and loaded a mission with a custom Boss, earning you the Customizer badge."}],
    acquisition: "Create and publish mission using the Mission Architect and include a Custom Critter as a Boss. (Account-wide)",
    links: [
        {title: "Customizer Badge", href: "https://paragonwiki.com/wiki/Customizer_Badge"}
    ],
    imageKeys: [{value: "core.ae.customizer"}]
};
