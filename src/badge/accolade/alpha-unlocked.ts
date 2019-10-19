import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const AlphaUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "alpha-unlocked",
    setTitleId: 1390,
    names: [
        {value: "Alpha Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Alpha Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Alpha Incarnate slot`,
    links: [
        {title: "Alpha Unlocked Badge", href: "https://paragonwiki.com/wiki/Alpha_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alpha-unlocked.png"}
    ]
};