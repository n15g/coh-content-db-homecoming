import { BadgeData } from 'coh-content-db'

export const SoulTaker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'soul-taker',
  setTitle: { id: 339 },
  name: [
    { value: 'Soul Taker' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The wizard Tarixus taught you dark secrets of the infernal realms in this mission.' },
  ],
  acquisition: 'Complete the Offer soul of Akarist mission from Archmage Tarixus',
  links: [
    { title: 'Soul Taker Badge', href: 'https://homecoming.wiki/wiki/Soul_Taker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png' },
  ],
}
