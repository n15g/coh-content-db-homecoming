import { BadgeData } from 'coh-content-db'
import { TheGateThatCannotOpen } from '../../mission/the-gate-that-cannot-open'

export const OneOfTheEight: BadgeData = {
  type: 'accomplishment',
  key: 'one-of-the-eight',
  setTitleId: [2237],
  name: 'One of the Eight',
  morality: 'all',
  badgeText: 'You tamed the chaos and magic which ran unchecked in the Night Ward, saving the world from the would-be rampages of Sorceress Serene and the Mother of all Monsters.',
  links: [
    { title: 'One of the Eight Badge', href: 'https://homecoming.wiki/wiki/One_of_the_Eight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/one-of-the-eight.png',
  requirements: [
    { key: TheGateThatCannotOpen.key, type: 'mission', missionKey: TheGateThatCannotOpen.key },
  ],
}
