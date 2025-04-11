import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { RoyCooling } from '../../contact/roy-cooling'

export const HelpingHand: BadgeData = {
  type: 'accomplishment',
  key: 'helping-hand',
  setTitleId: [1893],
  name: 'Helping Hand',
  morality: 'heroic',
  badgeText: `You've helped to solve the Medi-Porter crisis in Paragon and get the devices distributed to those who need them.`,
  acquisition: 'Complete the story arc from Roy Cooling.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Bad People, Good Intentions" entry with number 19.01 in the 25-29 level range.`,
  links: [
    { title: 'Helping Hand Badge', href: 'https://homecoming.wiki/wiki/Helping_Hand_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/helping-hand.png',
  requirements: [
    { key: 'bad-people-good-intentions', type: 'ARC', missionName: 'Bad People, Good Intentions', contactKey: RoyCooling.key },
  ],
}
