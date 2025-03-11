import { BadgeData } from 'coh-content-db'

export const SpiritWarrior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'spirit-warrior',
  setTitle: { id: 74 },
  name: [
    { value: 'Spirit Warrior' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You stopped a war between the Banished Pantheon and the Circle of Thorns.' },
  ],
  acquisition: 'Complete the Stop both Groups of Mystic Madmen mission from Andrea Mitchell, Cain Royce, Dr. Cheng, Piper Irving, Oliver Haak, or Josef Keller',
  links: [
    { title: 'Spirit Warrior Badge', href: 'https://homecoming.wiki/wiki/Spirit_Warrior_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spirit-warrior.png' },
  ],
}
