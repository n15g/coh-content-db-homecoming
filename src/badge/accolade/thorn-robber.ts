import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const ThornRobber: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "thorn-robber",
    setTitleId: 516,
    names: [
        {value: "Thorn Robber"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: `You have stolen the power of the Nexus of Thorns with the knowledge from the demon Sparcetriel.`}
    ],
    notes: `Complete the level 24-33 Tree of Thorns Respecification Trial from Sparcetriel`,
    links: [
        {title: "Thorn Robber Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Thorn_Robber_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/thorn-robber.png"}
    ]
};
