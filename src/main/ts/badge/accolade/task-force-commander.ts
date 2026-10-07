import { BadgeData, badgeLink } from 'coh-content-db'
import { CitadelsAssistant } from '../accomplishment/citadels-assistant'
import { CitadelsColleague } from '../accomplishment/citadels-colleague'
import { ManticoresAssociate } from '../accomplishment/manticores-associate'
import { NuminasCompatriot } from '../accomplishment/numinas-compatriot'
import { PenelopeYinsFriend } from '../accomplishment/penelope-yins-friend'
import { PositronsAlly } from '../accomplishment/positrons-ally'
import { PositronsRecruit } from '../accomplishment/positrons-recruit'
import { SynapsesCohort } from '../accomplishment/synapses-cohort'
import { SisterPsychesComrade } from '../accomplishment/sister-psyches-comrade'

export const TaskForceCommander: BadgeData = {
  type: 'accolade',
  key: 'task-force-commander',
  gameId: 'TaskForceCommander',
  setTitleId: [608],
  name: [
    { alignment: 'hero', value: 'Task Force Commander' },
    { alignment: 'villain', value: 'Task Force Abandoner' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have successfully completed each of the Task Forces given out by the Freedom Phalanx. This gives you +5% Hit Points, and access to military epaulets at the Tailor.` },
    { alignment: 'villain', value: `Your perks for serving the Freedom Phalanx have been stripped due to your descent into villainy. You can keep the epaulets, though.` },
  ],
  notes: `The following alternative badges also count toward this accolade:

* ${badgeLink(CitadelsAssistant)}, earned from the classic Citadel Task Force via Ouroboros, counts in lieu of ${badgeLink(CitadelsColleague)}.
* ${badgeLink(PositronsRecruit)}, earned from the classic Positron Task Force via Ouroboros, counts in lieu of ${badgeLink(PositronsAlly)}.
* ${badgeLink(SisterPsychesComrade)}, available only via Ouroboros, counts in lieu of ${badgeLink(PenelopeYinsFriend)}.`,
  links: [
    { title: 'Task Force Commander Badge', href: 'https://homecoming.wiki/wiki/Task_Force_Commander_Badge' },
    { title: 'Task Force Abandoner Badge', href: 'https://homecoming.wiki/wiki/Task_Force_Abandoner_Badge' },
    { title: 'Issue 28, Page 4 Patch Notes — Badge Adjustments', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/task-force-commander.png',
  effect: 'Awards +5% Max Health.',
  requirements: [
    { key: CitadelsColleague.key, type: 'badge', badgeKey: CitadelsColleague.key },
    { key: ManticoresAssociate.key, type: 'badge', badgeKey: ManticoresAssociate.key },
    { key: NuminasCompatriot.key, type: 'badge', badgeKey: NuminasCompatriot.key },
    { key: PenelopeYinsFriend.key, type: 'badge', badgeKey: PenelopeYinsFriend.key },
    { key: PositronsAlly.key, type: 'badge', badgeKey: PositronsAlly.key },
    { key: SynapsesCohort.key, type: 'badge', badgeKey: SynapsesCohort.key },
  ],
}
