import { BadgeData } from 'coh-content-db'

export const Demolitionist: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'demolitionist',
  setTitle: { id: 842 },
  name: [
    { value: 'Demolitionist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have helped place 10 bombs on the crashed Rikti ship in the Rikti War Zone.' },
  ],
  acquisition: 'Plant a bomb on the Rikti Mothership 10 times during Rikti Ship Raids',
  links: [
    { title: 'Demolitionist Badge', href: 'https://homecoming.wiki/wiki/Demolitionist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/demolitionist.png' },
  ],
}
