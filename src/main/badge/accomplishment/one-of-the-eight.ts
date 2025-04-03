import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { TheMagician } from '../../contact/the-magician'

export const OneOfTheEight: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'one-of-the-eight',
  setTitle: { id: 2237 },
  name: 'One of the Eight',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You tamed the chaos and magic which ran unchecked in the Night Ward, saving the world from the would-be rampages of Sorceress Serene and the Mother of all Monsters.',
  acquisition: 'Complete the story arc from The Magician',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "The Gate That Cannot Open" entry with number 23.05 in the 35-39 level range.`,
  links: [
    { title: 'One of the Eight Badge', href: 'https://homecoming.wiki/wiki/One_of_the_Eight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/one-of-the-eight.png',
  requirements: [
    { key: 'tgtco', type: 'ARC', missionName: 'The Gate that Cannot Open', contactKey: TheMagician.key },
  ],
}
