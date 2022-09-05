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
    acquisition: `Unlock the Alpha Incarnate slot`,
    notes: `Unlock the Alpha Incarnate slot by reaching level 50 and completing Mender Ramiel's story arc, or by earning Incarnate Experience through normal play.`,
    links: [
        {title: "Alpha Unlocked Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Alpha_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alpha-unlocked.png"}
    ]
};
