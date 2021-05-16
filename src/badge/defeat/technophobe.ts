import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Technophobe: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "technophobe",
    setTitleId: 1469,
    names: [
        {value: "Technophobe"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "If the Praetorian Clockwork felt any emotion, they would learn to fear you. You defeated your " +
                "fair share of Praetorian Clockwork to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Praetorian Clockwork",
    links: [
        {title: "Technophobe Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Technophobe_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/technophobe.png"}
    ],
};
