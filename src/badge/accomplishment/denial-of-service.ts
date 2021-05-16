import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DenialOfService: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "denial-of-service",
    setTitleId: 1421,
    names: [
        {value: "Denial of Service"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You crept a bit too close to the danger zone and got burned."}
    ],
    acquisition: "Attempt to penetrate the sonic barrier surrounding the Praetorian zones",
    links: [
        {title: "Denial of Service Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Denial_of_Service_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/denial-of-service.png"}
    ],
};
