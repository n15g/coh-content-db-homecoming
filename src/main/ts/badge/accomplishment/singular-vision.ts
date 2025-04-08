import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { SpecialAgentJenniAdair } from '../../contact/special-agent-jenni-adair'

export const SingularVision: BadgeData = {
  type: 'accomplishment',
  key: 'singular-vision',
  setTitleId: [1588],
  name: 'Singular Vision',
  morality: 'heroic',
  badgeText: `You've prevented Protean from carrying out his plot for a Praetorian invasion, but not without a heavy cost - the death of your alternate self.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Looking Through the Glass" entry with number 17.02 in the 25-29 level range.`,
  links: [
    { title: 'Singular Vision Badge', href: 'https://homecoming.wiki/wiki/Singular_Vision_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/singular-vision.png',
  requirements: [
    { key: 'lttg', type: 'ARC', missionName: 'Looking Through the Glass', contactKey: SpecialAgentJenniAdair.key },
  ],
}
