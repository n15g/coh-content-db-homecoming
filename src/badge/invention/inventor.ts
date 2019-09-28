import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Inventor: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "inventor",
    names: [{value: "Inventor"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have proven your skills as an Inventor at the University."}],
    acquisition: "Awarded for completing the Invention System tutorial missions.",
    notes: "For Heroes, this is awarded by completing the mission from Guidance Counselor Jones." +
        "\n\nfor Villains, this is awarded by completing the mission from James Bright at the Cap au Diable university.",
    links: [
        {title: "Inventor Badge", href: "https://paragonwiki.com/wiki/Inventor_Badge"}
    ],
    imageKeys: [{value: "core.invention.inventor"}]
};
