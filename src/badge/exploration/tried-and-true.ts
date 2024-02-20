import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TriedAndTrue: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tried-and-true",
    setTitleId: 2370,
    names: [{value: "Tried and True"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{
        value: `When the Omega Team accepted their mission to the Rikti home dimension, they knew they likely wouldn't be coming back. You have protected their memorial through many trials, staying true to the end.`
    }],
    notes: `Visit the Omega Team memorial plaques in three separate instances:

* The open-world Memorial in Atlas Park City Hall (66.0, -634.2, -681.9).
* During the Cape Mission (Available at level 20) from the City Representative in Atlas Park City Hall (1520.0, -813.2, -2688.1).
* During the Dr. Kahn Task Force (1520.0, -813.2, -2688.1).`,
    links: [
        {title: "Tried and True Badge", href: "https://homecoming.wiki/wiki/Tried_and_True_Badge"},
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
