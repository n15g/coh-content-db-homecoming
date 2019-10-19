import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {LawEnforcer} from "../day-job/law-enforcer";
import {CityOfficial} from "../day-job/city-official";

export const PoliceChief: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "police-chief",
    setTitleId: 1062,
    names: [
        {type: Alternate.H, value: "Police Chief"},
        {type: Alternate.V, value: "Corrupt Commissioner"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `Your time spent working with both Paragon City Hall and the Paragon Police Department has earned you a great deal of respect.  While logged out in either Paragon City Hall or a Police Department you'll earn uses for your Police Chief's Baton power.`},
        {type: Alternate.V, value: `The scandal caused by your switch to villainy brought down a City Representative and an entire PPD precinct.`}
    ],
    notes: `Earn the [badge:law-enforcer] and [badge:city-official] Day Jobs`,
    links: [
        {title: "Police Chief Badge", href: "https://paragonwiki.com/wiki/Police_Chief_Badge"},
        {title: "Corrupt Commissioner Badge", href: "https://paragonwiki.com/wiki/Corrupt_Commissioner_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/police-chief.png"}
    ],
    partials: [
            {key: LawEnforcer.key, type: BadgePartialType.BADGE, badgeKey: LawEnforcer.key},
            {key: CityOfficial.key, type: BadgePartialType.BADGE, badgeKey: CityOfficial.key}
    ]
};