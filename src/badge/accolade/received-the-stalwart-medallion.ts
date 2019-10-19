import {ALIGNMENT_HERO, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const ReceivedTheStalwartMedallion: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "received-the-stalwart-medallion",
    setTitleId: 178,
    names: [
        {type: Alternate.H, value: "Received the Stalwart Medallion"},
        {type: Alternate.V, value: "Lost the Stalwart Medallion"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {value: `Your battle in the reactor of Terra Volta altered your powers in a permanent way.`}
    ],
    notes: `Complete the level 24-33 Terra Volta Respecification Trial from Jane Hallaway`,
    links: [
        {title: "Received the Stalwart Medallion Badge", href: "https://paragonwiki.com/wiki/Received_the_Stalwart_Medallion_Badge"},
        {title: "Lost the Stalwart Medallion Badge", href: "https://paragonwiki.com/wiki/Lost_the_Stalwart_Medallion_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-stalwart-medallion.png"}
    ]
};