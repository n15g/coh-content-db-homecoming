import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CitadelsAssistant} from "../accomplishment/citadels-assistant";
import {ManticoresAssociate} from "../accomplishment/manticores-associate";
import {NuminasCompatriot} from "../accomplishment/numinas-compatriot";
import {PenelopeYinsFriend} from "../accomplishment/penelope-yins-friend";
import {PositronsAlly} from "../accomplishment/positrons-ally";
import {SynapsesCohort} from "../accomplishment/synapses-cohort";

export const TaskForceCommander: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "task-force-commander",
    setTitleId: 608,
    names: [
        {type: Alternate.H, value: "Task Force Commander"},
        {type: Alternate.V, value: "Task Force Abandoner"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
        {type: Alternate.H, value: `You have successfully completed each of the Task Forces given out by the Freedom Phalanx. This gives you +5% Hit Points, and access to military epaulets at the Tailor.`},
        {type: Alternate.V, value: `Your perks for serving the Freedom Phalanx have been stripped due to your descent into villainy. You can keep the epaulets, though.`}
    ],
    notes: `Awards +5% Max Health\n
Alternatively [badge:sister-psyches-comrade], available only via Ouroboros, counts in lieu of [badge:penelope-yins-friend].`,
    links: [
        {title: "Task Force Commander Badge", href: "https://homecoming.wiki/wiki/Task_Force_Commander_Badge"},
        {title: "Task Force Abandoner Badge", href: "https://homecoming.wiki/wiki/Task_Force_Abandoner_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/task-force-commander.png"}
    ],
    effect: `+5% Max Health`,
    partials: [
        {key: CitadelsAssistant.key, type: BadgePartialType.BADGE, badgeKey: CitadelsAssistant.key},
        {key: ManticoresAssociate.key, type: BadgePartialType.BADGE, badgeKey: ManticoresAssociate.key},
        {key: NuminasCompatriot.key, type: BadgePartialType.BADGE, badgeKey: NuminasCompatriot.key},
        {key: PenelopeYinsFriend.key, type: BadgePartialType.BADGE, badgeKey: PenelopeYinsFriend.key},
        {key: PositronsAlly.key, type: BadgePartialType.BADGE, badgeKey: PositronsAlly.key},
        {key: SynapsesCohort.key, type: BadgePartialType.BADGE, badgeKey: SynapsesCohort.key}
    ]
};
