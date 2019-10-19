import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Architect} from "../day-job/architect";
import {Professor} from "../day-job/professor";

export const MasterArchitect: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "master-architect",
    setTitleId: 1082,
    names: [
        {value: "Master Architect"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your extensive study of the Mission Architect technology has earned you the Master Architect Day Job.  Earning this Accolade grants you the Invigorate power which will allow you to revive yourself, should you be defeated, while on Architect missions.`},
        {type: Alternate.V, value: `Your extensive study of the Mission Architect technology has earned you the Master Architect Day Job.  Earning this Accolade grants you the Vitalize power which will allow you to revive yourself once every 10 minutes, should you be defeated, while on Architect missions.`}
    ],
    notes: `Earn the [badge:architect] and [badge:professor] Day Jobs`,
    links: [
        {title: "Master Architect Badge", href: "https://paragonwiki.com/wiki/Master_Architect_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/master-architect.png"}
    ],
    partials: [
            {key: Architect.key, type: BadgePartialType.BADGE, badgeKey: Architect.key},
            {key: Professor.key, type: BadgePartialType.BADGE, badgeKey: Professor.key}
    ]
};