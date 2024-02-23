import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const SorcerersApprentice: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "sorcerers-apprentice",
    setTitleId: 2215,
    names: [
        {value: "Sorcerer's Apprentice"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Your magical aptitude allowed you to tame the wild magics of the Night Ward.  The capricious " +
                "Animus Arcana have been dispelled at your hand."
        }
    ],
    acquisition: "Defeat 100 points worth of Animus Arcana",
    links: [
        {title: "Sorcerer's Apprentice Badge", href: "https://homecoming.wiki/wiki/Sorcerer%27s_Apprentice_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/sorcerers-apprentice.png"}
    ],
};
