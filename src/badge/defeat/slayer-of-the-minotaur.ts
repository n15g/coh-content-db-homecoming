import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SlayerOfTheMinotaur: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "slayer-of-the-minotaur",
    setTitleId: 2534,
    names: [
        {value: "Slayer of the Minotaur"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "Historians insisted that it couldn't be done, that The Minotaur in the Fog could not be bested in combat, but you've done just that. You've proven yourself worthy to stand shoulder-to-shoulder with the greatest ancient heroes of myth."}
    ],
    acquisition: "Defeat The Minotaur in the Fog.",
    links: [
        {title: "Slayer of the Minotaur Badge", href: "https://homecoming.wiki/wiki/Slayer_of_the_Minotaur_Badge_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/slayer-of-the-minotaur.png"}
    ],
};
