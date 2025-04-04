import { BadgeData, badgeLink } from 'coh-content-db'
import { CitadelsAssistant } from '../accomplishment/citadels-assistant'
import { ManticoresAssociate } from '../accomplishment/manticores-associate'
import { NuminasCompatriot } from '../accomplishment/numinas-compatriot'
import { PenelopeYinsFriend } from '../accomplishment/penelope-yins-friend'
import { PositronsAlly } from '../accomplishment/positrons-ally'
import { SynapsesCohort } from '../accomplishment/synapses-cohort'
import { SisterPsychesComrade } from '../accomplishment/sister-psyches-comrade'

export const TaskForceCommander: BadgeData = {
  type: 'accolade',
  key: 'task-force-commander',
  setTitleId: [608],
  name: [
    { alignment: 'hero', value: 'Task Force Commander' },
    { alignment: 'villain', value: 'Task Force Abandoner' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have successfully completed each of the Task Forces given out by the Freedom Phalanx. This gives you +5% Hit Points, and access to military epaulets at the Tailor.` },
    { alignment: 'villain', value: `Your perks for serving the Freedom Phalanx have been stripped due to your descent into villainy. You can keep the epaulets, though.` },
  ],
  notes: `Alternatively ${badgeLink(SisterPsychesComrade)}, available only via Ouroboros, counts in lieu of ${badgeLink(PenelopeYinsFriend)}.`,
  links: [
    { title: 'Task Force Commander Badge', href: 'https://homecoming.wiki/wiki/Task_Force_Commander_Badge' },
    { title: 'Task Force Abandoner Badge', href: 'https://homecoming.wiki/wiki/Task_Force_Abandoner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/task-force-commander.png',
  effect: 'Awards +5% Max Health.',
  requirements: [
    { key: CitadelsAssistant.key, type: 'badge', badgeKey: CitadelsAssistant.key },
    { key: ManticoresAssociate.key, type: 'badge', badgeKey: ManticoresAssociate.key },
    { key: NuminasCompatriot.key, type: 'badge', badgeKey: NuminasCompatriot.key },
    { key: PenelopeYinsFriend.key, type: 'badge', badgeKey: PenelopeYinsFriend.key },
    { key: PositronsAlly.key, type: 'badge', badgeKey: PositronsAlly.key },
    { key: SynapsesCohort.key, type: 'badge', badgeKey: SynapsesCohort.key },
  ],
}
