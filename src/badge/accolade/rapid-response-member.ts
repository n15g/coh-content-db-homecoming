import {ALIGNMENT_ANY, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {Patroller} from "../day-job/patroller";
import {MonitorDuty} from "../day-job/monitor-duty";

export const RapidResponseMember: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "rapid-response-member",
    setTitleId: 1076,
    names: [
        {type: Alternate.H, value: "Rapid Response Member"},
        {type: Alternate.V, value: "Trouble Maker"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `Your reputation of your work with your Super Group and in the field has earned you the Rapid Response Member Accolade.  While logged out near a Super Group Base portal you will earn time towards your Base Teleporter power.`},
        {type: Alternate.V, value: `Your reputation of your work with your Super Group and causing havok in the streets of the Rogue Isles has earned you the Trouble Maker Accolade.  While logged out near a Super Group Base portal you will earn time towards your Base Teleporter power.`}
    ],
    notes: `Earn the [badge:monitor-duty] and [badge:patroller] Day Jobs`,
    links: [
        {title: "Rapid Response Member Badge", href: "https://paragonwiki.com/wiki/Rapid_Response_Member_Badge"},
        {title: "Trouble Maker Badge", href: "https://paragonwiki.com/wiki/Trouble_Maker_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/rapid-response-member.png"}
    ],
    partials: [
            {key: Patroller.key, type: BadgePartialType.BADGE, badgeKey: Patroller.key},
            {key: MonitorDuty.key, type: BadgePartialType.BADGE, badgeKey: MonitorDuty.key}
    ]
};