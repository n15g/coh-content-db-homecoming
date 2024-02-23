import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Chatterbox: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "chatterbox",
    setTitleId: 2263,
    names: [
        {value: "Chatterbox"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {
            value: "You were sent in to handle things on Refugee Island, but you decided to catch up with some old " +
                "friends from First Ward."
        }
    ],
    acquisition: "Speak to four key NPCs from First Ward in the second mission of the first story arc from Provost Marchand",
    links: [
        {title: "Chatterbox Badge", href: "https://homecoming.wiki/wiki/Chatterbox_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png"}
    ],
};
