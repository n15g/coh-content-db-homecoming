import { BadgeData } from 'coh-content-db'

export const ProtectorOfKindness: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'protector-of-kindness',
  setTitle: { id: 425 },
  name: [
    { alignment: 'H', value: 'Protector of Kindness' },
    { alignment: 'V', value: 'Thorn Crusher' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You saved the being known as Faathim the Kind from capture by the Circle of Thorns.' },
  ],
  acquisition: 'Complete the Justin Augustine Task Force: The Saga of Faathim',
  links: [
    { title: 'Protector of Kindness Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Kindness_Badge' },
    { title: 'Thorn Crusher Badge', href: 'https://homecoming.wiki/wiki/Thorn_Crusher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/protector-of-kindness.png' },
  ],
}
