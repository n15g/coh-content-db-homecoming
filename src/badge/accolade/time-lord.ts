import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Cimeroran} from "../day-job/cimeroran";
import {Chronologist} from "../day-job/chronologist";

export const TimeLord: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "time-lord",
    setTitleId: 1072,
    names: [
        {value: "Time Lord"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your presence in Cimerora and working with the Menders of Ouroboros has earned you the Time Lord Accolade.  While logged out in either Cimerora or Ouroboros you will earn additional time for your Time Lord Power.`}
    ],
    notes: `Earn the [badge:cimeroran] and [badge:chronologist] Day Jobs`,
    links: [
        {title: "Time Lord Badge", href: "https://homecoming.wiki/wiki/Time_Lord_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/time-lord.png"}
    ],
    partials: [
        {key: Cimeroran.key, type: BadgePartialType.BADGE, badgeKey: Cimeroran.key},
        {key: Chronologist.key, type: BadgePartialType.BADGE, badgeKey: Chronologist.key}
    ]
};
