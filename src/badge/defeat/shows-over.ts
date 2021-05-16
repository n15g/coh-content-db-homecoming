import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ShowsOver: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "shows-over",
    setTitleId: 2059,
    names: [
        {value: "Show's Over"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "When you roll into town, the fractured Carnivals of Praetoria know to close up shop before you " +
                "force the issue. You defeated several Carnival of Light, Vengeance, or War to earn this badge."
        }
    ],
    acquisition: "Defeat 100 points worth of Carnival of Light, Vengeance, or War",
    links: [
        {title: "Show's Over Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Show%27s_Over_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/shows-over.png"}
    ],
};
