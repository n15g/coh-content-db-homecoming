import { BadgeData, zoneLink } from 'coh-content-db'
import { AgentWatkins } from '../../contact/agent-watkins'
import { Ouroboros } from '../../zone/ouroboros'

export const UncivilWarrior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'uncivil-warrior',
  setTitle: { id: 2437 },
  name: 'Uncivil Warrior',
  alignment: ['H'],
  badgeText: `As the crescendo to a wild adventure that took you all over the city and into many life-threatening scenarios, you went straight to the heart of where the last Vahzilok
leader was trying to navigate the complex civil war within the ranks.
Cortex was able to escape you, but Dr. Pierce was left trapped in her own mess of lies and deceptions, her fate left to the authorities and the Paragon justice system.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Graveyard Shift" entry with number 27.01 in the 25-30 level range.`,
  links: [
    { title: 'Uncivil Warrior Badge', href: 'https://homecoming.wiki/wiki/Uncivil_Warrior_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/uncivil-warrior.png' },
  ],
  requirements: [
    { key: 'tgs', type: 'ARC', missionName: 'The Graveyard Shift', contactKey: AgentWatkins.key },
  ],
}
