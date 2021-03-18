import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const EmberLegacyOfFlame: IBadgeData = {
    type: BadgeType.GLADIATOR,
    key: "ember-legacy-of-flame",
    setTitleId: 464,
    names: [
        {value: "Ember Legacy of Flame"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: "The Legacy Chain respects you."},
        {type: Alternate.V, value: "These do-gooders are trapped in your power."}
    ],
    acquisition: "Defeat 200 Legacy Chain Minions (Legacy Chain)",
    notes: "The in-game hint text says 100 minions, but 200 are required.",
    links: [
        {title: "Ember Legacy of Flame Badge", href: "https://paragonwiki.com/wiki/Ember_Legacy_of_Flame_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png"}
    ],
};
