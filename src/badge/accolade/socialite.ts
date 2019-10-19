import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Clubber} from "../day-job/clubber";
import {FashionDesigner} from "../day-job/fashion-designer";

export const Socialite: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "socialite",
    setTitleId: 1070,
    names: [
        {value: "Socialite"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Your popularity and your fashion sense have earned you the Socialite Accolade.  While logged out in Pocket D or a Tailor you will earn charges for your Beguile power.`}
    ],
    notes: `Earn the [badge:clubber] and [badge:fashion-designer] Day Jobs`,
    links: [
        {title: "Socialite Badge", href: "https://paragonwiki.com/wiki/Socialite_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/socialite.png"}
    ],
    partials: [
            {key: Clubber.key, type: BadgePartialType.BADGE, badgeKey: Clubber.key},
            {key: FashionDesigner.key, type: BadgePartialType.BADGE, badgeKey: FashionDesigner.key}
    ]
};