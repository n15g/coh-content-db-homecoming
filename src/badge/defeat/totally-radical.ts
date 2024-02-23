import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const TotallyRadical: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "totally-radical",
    setTitleId: 2486,
    names: [
        {value: "Totally Radical"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `After going toe-to-toe with more than a few of Crey's new radiation-powered combat suits, you've shown them why it'll take more than a few gamma rays to slow you down.`}
    ],
    acquisition: `Defeat 200 of Crey's Gamma Tank minions.`,
    links: [
        {title: "Totally Radical Badge", href: "https://homecoming.wiki/wiki/Totally_Radical_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/totally-radical.png"}
    ],
};
