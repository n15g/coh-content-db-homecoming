import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { AgentWatkins } from '../../contact/agent-watkins'

export const TheGreaterGood: BadgeData = {
  type: 'accomplishment',
  key: 'the-greater-good',
  setTitleId: [2435],
  name: 'The Greater Good',
  morality: 'heroic',
  badgeText: `You chose to sit tight and quarantine yourself, rather than jeopardize Paragon with the diseases from Pathogen's warehouse.`,
  acquisition: `Choose to quarantine during "The Graveyard Shift" story arc from ${contactLink(AgentWatkins)}.`,
  notes: `**Note:** Only awarded to the mission owner.
  
  To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The Graveyard Shift" entry with number 27.01 in the 25-30 level range.`,
  links: [
    { title: 'The Greater Good Badge', href: 'https://homecoming.wiki/wiki/The_Greater_Good_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-greater-good.png',
}
