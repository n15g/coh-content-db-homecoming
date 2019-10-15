import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const LucentLegacyOfLight: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "lucent-legacy-of-light",
    names: [
        {value: "Lucent Legacy of Light"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "The Legacy Chain respects you."},
        {type: Alternate.V, value: "These fools underestimated your true power!"}
    ],
    acquisition: "Defeat 200 Legacy Chain Lieutenants (Legacy Chain)",
    links: [
        {title: "Lucent Legacy of Light Badge", href: "https://paragonwiki.com/wiki/Lucent_Legacy_of_Light_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
