import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const CouchPotato: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "couch-potato",
    setTitleId: 347,
    names: [
        {value: "Couch Potato"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            value: "You destroyed a shipment of books on the word of the Television, and then blamed it all on " +
                "video games."
        }
    ],
    acquisition: "Complete the Destroy books for Television mission from Television",
    links: [
        {title: "Couch Potato Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Couch_Potato_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-9.png"}
    ],
};
