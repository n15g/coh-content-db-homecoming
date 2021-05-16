import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PowerHungry: IBadgeData = {
    type: BadgeType.EVENT,
    key: "power-hungry",
    setTitleId: 1768,
    names: [
        {value: "Power Hungry"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "The Malleus Mundi has real power, and you've tapped into some of its potential."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Use the Malleus Mundi to gain personal power'.",
    links: [
        {title: "Power Hungry Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Power_Hungry_Badge"},
        {title: "Whispered Rumour", href: "https://hcwiki.cityofheroes.dev/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/power-hungry.png"}]
};
