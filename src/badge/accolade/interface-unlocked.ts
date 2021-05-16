import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const InterfaceUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "interface-unlocked",
    setTitleId: 1392,
    names: [
        {value: "Interface Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Interface Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Interface Incarnate slot`,
    links: [
        {title: "Interface Unlocked Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Interface_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/interface-unlocked.png"}
    ]
};
