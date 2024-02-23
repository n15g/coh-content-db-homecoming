import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Professor} from "../day-job/professor";
import {Intern} from "../day-job/intern";

export const Scientist: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "scientist",
    setTitleId: 1066,
    names: [
        {type: Alternate.H, value: "Scientist"},
        {type: Alternate.V, value: "Crackpot"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your studies at the Universities of Paragon City and work with Portal Corps have earned you the Scientist Accolade.  While logged out at a University or inside a Portal Corps building you will earn charges of Sleep Gas.`},
        {type: Alternate.V, value: `Eager to distance themselves from your villainous self, Portal Corps and the universities of Paragon City have quickly denounced you as merely a Crackpot.`}
    ],
    notes: `Earn the [badge:professor] and [badge:intern] Day Jobs`,
    links: [
        {title: "Scientist Badge", href: "https://homecoming.wiki/wiki/Scientist_Badge"},
        {title: "Crackpot Badge", href: "https://homecoming.wiki/wiki/Crackpot_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/scientist.png"}
    ],
    partials: [
        {key: Professor.key, type: BadgePartialType.BADGE, badgeKey: Professor.key},
        {key: Intern.key, type: BadgePartialType.BADGE, badgeKey: Intern.key}
    ]
};
