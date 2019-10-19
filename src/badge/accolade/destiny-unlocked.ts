import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const DestinyUnlocked: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "destiny-unlocked",
    setTitleId: 1394,
    names: [
        {value: "Destiny Unlocked"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You unlocked your Destiny Incarnate slot allowing you to create powerful new abilities that can be slotted there.`}
    ],
    notes: `Unlock your Destiny Incarnate slot`,
    links: [
        {title: "Destiny Unlocked Badge", href: "https://paragonwiki.com/wiki/Destiny_Unlocked_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/destiny-unlocked.png"}
    ]
};