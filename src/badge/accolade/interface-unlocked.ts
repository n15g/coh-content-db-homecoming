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
    acquisition: `Unlock the Interface Incarnate slot`,
    notes: `Unlock the Interface Incarnate slot by earning Incarnate Experience through normal play.`,
    links: [
        {title: "Interface Unlocked Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Interface_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/interface-unlocked.png"}
    ]
};
