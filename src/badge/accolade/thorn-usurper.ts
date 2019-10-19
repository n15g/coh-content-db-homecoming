import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ThornUsurper: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "thorn-usurper",
    setTitleId: 518,
    names: [
        {value: "Thorn Usurper"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Ractespriel.`}
    ],
    notes: `Complete the level 44-50 Tree of Thorns Respecification Trial from Ractespriel`,
    links: [
        {title: "Thorn Usurper Badge", href: "https://paragonwiki.com/wiki/Thorn_Usurper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-usurper.png"}
    ]
};