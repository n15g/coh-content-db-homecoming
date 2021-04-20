import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Pwnz: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "pwnz",
    setTitleId: 75,
    names: [
        {value: "Pwnz"}
    ],
    alignment: ALIGNMENT_HERO,
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pwnz.png"}],
    badgeText: [
        {value: "You have arrested one of the higher ranking members of the Freakshow."}
    ],
    acquisition: "Complete the Retrieve Weapons From The Freakshow mission from Wilma Peterson, Andrew Fiore, Claire Childress, Hugh McDougal, Jake Kim, or Vic Garland",
    links: [
        {title: "Pwnz Badge", href: "https://paragonwiki.com/wiki/Pwnz_Badge"}
    ]
};
