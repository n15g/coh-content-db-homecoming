import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Pupil} from "../history/pupil";
import {Spelunker} from "../accomplishment/spelunker";
import {TheSilverBullet} from "../defeat/the-silver-bullet";
import {TheSlayer} from "../defeat/the-slayer";
import {TopDog} from "../exploration/top-dog";

export const ReceivedTheAtlasMedallion: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "received-the-atlas-medallion",
    setTitleId: 160,
    names: [
        {type: Alternate.H, value: "Received the Atlas Medallion"},
        {type: Alternate.V, value: "Atlas Shrugged"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Through the might of Atlas, one of the greatest heroes of Paragon City's history, you have gained +5 to your maximum Endurance total.`},
        {type: Alternate.V, value: `Whatever power the spirit of Atlas once sent your way, it doesn't seem to work for villains.`}
    ],
    notes: `Awards +5 Max Endurance`,
    links: [
        {title: "Received the Atlas Medallion Badge", href: "https://paragonwiki.com/wiki/Received_the_Atlas_Medallion_Badge"},
        {title: "Atlas Shrugged Badge", href: "https://paragonwiki.com/wiki/Atlas_Shrugged_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-atlas-medallion.png"}
    ],
    effect: `+5 Max Endurance`,
    partials: [
            {key: Pupil.key, type: BadgePartialType.BADGE, badgeKey: Pupil.key},
            {key: Spelunker.key, type: BadgePartialType.BADGE, badgeKey: Spelunker.key},
            {key: TheSilverBullet.key, type: BadgePartialType.BADGE, badgeKey: TheSilverBullet.key},
            {key: TheSlayer.key, type: BadgePartialType.BADGE, badgeKey: TheSlayer.key},
            {key: TopDog.key, type: BadgePartialType.BADGE, badgeKey: TopDog.key}
    ]
};