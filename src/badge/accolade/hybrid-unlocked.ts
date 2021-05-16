import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const HybridUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "hybrid-unlocked",
    setTitleId: 1395,
    names: [
        {value: "Hybrid Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Hybrid Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Hybrid Incarnate slot`,
    links: [
        {title: "Hybrid Unlocked Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Hybrid_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hybrid-unlocked.png"}
    ]
};
