import {ALIGNMENT_VILLAIN, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const SharkBait: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "shark-bait",
    setTitleId: 615,
    names: [
        {type: Alternate.H, value: "Shark Bait"},
        {type: Alternate.V, value: "Bloodletter"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `Captain Mako once called you an ally. Now he calls you a snack.`},
        {type: Alternate.V, value: `You're deadly and cold-blooded. Captain Mako appreciates that.`}
    ],
    notes: `Complete Captain Mako's patron story arc`,
    links: [
        {title: "Shark Bait Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Shark_Bait_Badge"},
        {title: "Bloodletter Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Bloodletter_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/shark-bait.png"}
    ]
};
