import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const TriedAndTrue: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "tried-and-true",
    names: [{value: "Tried and True"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{
        value: "When the Omega Team accepted their mission to the Rikti home dimension, they knew they likely wouldn't be coming back." + "" +
            " You have protected their memorial through many trials, staying true to the end."
    }],
    notes: `You need to visit several memorial plaques across a few missions and zones to aquire this badge:

* Visit the open-world Memorial in Atlas Park City Hall.
* Visit the Memorial during the Cape Mission (Available at level 20) from the City Representative in Atlas Park City Hall.
* Visit the Memorial during the Dr. Kahn Task Force.`,
    links: [
        {title: "New Hero One Memorial Badge", href: "https://forums.homecomingservers.com/topic/1889-new-hero-one-memorial-badge/?do=findComment&comment=38908"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};
