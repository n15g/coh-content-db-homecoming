import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const CoolCustomer: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "cool-customer",
    setTitleId: 2485,
    names: [
        {value: "Cool Customer"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've broken the ice with Crey's new cutting-edge cryogenic scientists, proving that you're the coolest customer around and that Crey ought to chill out before somebody (probably them) gets hurt.`}
    ],
    acquisition: `Defeat 50 of Crey's Cryogenicist bosses.`,
    links: [
        {title: "Cool Customer Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cool_Customer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/cool-customer.png"}
    ],
};