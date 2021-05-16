import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const APerfectStorm: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "a-perfect-storm",
    setTitleId: 2080,
    names: [
        {value: "A Perfect Storm"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "Despite the furious typhoon of psychic energy enveloping you within Mother Yin's layer of the " +
                "Minds of Mayhem, you were able to keep calm, efficiently using the precious Eyes of the Storm " +
                "to put an end to Mother Mayhem's hold on Penelope Yin."
        }
    ],
    acquisition: "Defeat Mother Yin while creating no more than 4 Eyes of the Storm, then complete the trial",
    links: [
        {title: "A Perfect Storm Badge", href: "https://hcwiki.cityofheroes.dev/wiki/A_Perfect_Storm_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png"}
    ],
};
