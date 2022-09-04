import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ThornThief: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "thorn-thief",
    setTitleId: 517,
    names: [
        {value: "Thorn Thief"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Trepsarciel.`}
    ],
    acquisition: `Complete the second Tree of Thorns Respecification Trial`,
    notes: `The second (level 34-43) Tree of Thorns Respecification Trial is available from Trepsarciel in Nerva Archipelago.`,
    links: [
        {title: "Thorn Thief Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Thorn_Thief_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-thief.png"}
    ]
};
