import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Negotiator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "negotiator",
    setTitleId: 71,
    names: [
        {value: "Negotiator"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: "You were instrumental in stopping a war between the Clockwork and the Skulls."}
    ],
    acquisition: "Complete the Get the Clockwork out of the warehouse before the Skulls get involved mission from Tony Kord, Paula Dempsey, or Maurice Feldon",
    links: [
        {title: "Negotiator Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Negotiator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/negotiator.png"}
    ],
};
