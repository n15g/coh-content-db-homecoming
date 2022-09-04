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
    acquisition: `Complete the third Tree of Thorns Respecification Trial`,
    notes: `The third (level 44-50) Tree of Thorns Respecification Trial is available from Ractespriel in Nerva Archipelago.`,
    links: [
        {title: "Thorn Usurper Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Thorn_Usurper_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-usurper.png"}
    ]
};
