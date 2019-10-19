import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Professor} from "../day-job/professor";
import {CreyTestSubject} from "../day-job/crey-test-subject";

export const Whistleblower: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "whistleblower",
    setTitleId: 1077,
    names: [
        {type: Alternate.H, value: "Whistleblower"},
        {type: Alternate.V, value: "Crey Scientist"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `Crey Industries has been hard at work removing your name from all your research and publicly denying the corporate secrets you've revealed.`},
        {
            type: Alternate.V,
            value: `Your work with Crey Industries and studies in various fields has earned you the Crey Scientist Accolade.  While logged out in the Crey Industries building or in a University you will earn additional charges for your Sleep Grenade power.`
        }
    ],
    notes: `Earn the [badge:crey-employee] and [badge:professor] Day Jobs`,
    links: [
        {title: "Whistleblower Badge", href: "https://paragonwiki.com/wiki/Whistleblower_Badge"},
        {title: "Crey Scientist Badge", href: "https://paragonwiki.com/wiki/Crey_Scientist_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/whistleblower.png"}
    ],
    partials: [
        {key: Professor.key, type: BadgePartialType.BADGE, badgeKey: Professor.key},
        {key: CreyTestSubject.key, type: BadgePartialType.BADGE, badgeKey: CreyTestSubject.key}
    ]
};
