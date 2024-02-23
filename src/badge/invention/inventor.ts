import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Inventor: IBadgeData = {
    type: BadgeType.INVENTION,
    key: "inventor",
    setTitleId: 732,
    names: [{value: "Inventor"}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You have proven your skills as an Inventor at the University."}],
    acquisition: "Awarded for completing the Invention System tutorial missions.",
    notes: "For Heroes, this is awarded by completing the mission from Guidance Counselor Jones." +
        "\n\nfor Villains, this is awarded by completing the mission from James Bright at the Cap au Diable university.",
    links: [
        {title: "Inventor Badge", href: "https://homecoming.wiki/wiki/Inventor_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/inventor.png"}]
};
