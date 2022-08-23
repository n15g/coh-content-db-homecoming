import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Hologram: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "hologram",
    setTitleId: 2497,
    names: [
        {value: "Hologram"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Thank you for your purchase of the BenevoLabs© BL-22c Holographic Matrix™! This intuitive, all-in-one system will automatically install and manage any hologram costumes you own, allowing you to access all of them from one handy location! We look forward to your continued patronage!`}
    ],
    notes: `Purchased from BenevoLabs vendors in any Vault Reserve location for 50 Prismatic Aether salvage`,
    links: [
        {title: "Hologram Badge", href: "https://homecoming.wiki/wiki/Hologram_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hologram.png"}
    ]
};