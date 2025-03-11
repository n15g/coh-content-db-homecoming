import { BadgeData } from 'coh-content-db'

export const Unbreakable: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'unbreakable',
  setTitle: { id: 11, praetorianId: 1677 },
  name: [
    { value: 'Unbreakable' },
    { alignment: 'P', value: 'Iron Willed' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You are truly unbreakable. You have survived ten million points of damage.' },
    {
      alignment: 'P', value: 'The average Praetorian may suffer from a broken will, but neither your will nor your body can '
        + 'be broken.',
    },
  ],
  acquisition: 'Endure 10,000,000 points of damage',
  links: [
    { title: 'Unbreakable Badge', href: 'https://homecoming.wiki/wiki/Unbreakable_Badge' },
    { title: 'Iron Willed Badge', href: 'https://homecoming.wiki/wiki/Iron_Willed_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
