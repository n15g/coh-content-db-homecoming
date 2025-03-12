import { BadgeData } from 'coh-content-db'

export const TheGreaterGood: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-greater-good',
  setTitle: { id: 2435 },
  name: [
    { value: 'The Greater Good' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You chose to sit tight and quarantine yourself, rather than jeopardize Paragon with the diseases from Pathogen's warehouse.` },
  ],
  acquisition: 'Quarantine during The Graveyard Shift story arc.',
  links: [
    { title: 'The Greater Good Badge', href: 'https://homecoming.wiki/wiki/The_Greater_Good_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-greater-good.png' },
  ],
}
