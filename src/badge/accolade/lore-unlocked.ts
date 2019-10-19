import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const LoreUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "lore-unlocked",
    setTitleId: 1393,
    names: [
        {value: "Lore Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Lore Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Lore Incarnate slot`,
    links: [
        {title: "Lore Unlocked Badge", href: "https://paragonwiki.com/wiki/Lore_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/lore-unlocked.png"}
    ]
};