import { BadgeData } from 'coh-content-db'

export const ManInBlack: BadgeData = {
  type: 'DEFEAT',
  key: 'man-in-black',
  setTitle: { id: 312 },
  name: [
    { sex: 'M', value: 'Man in Black' },
    { sex: 'F', value: 'Woman in Black' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'These creepy alien parasites are no match for you.' },
  ],
  acquisition: 'Defeat 200 Shivans',
  links: [
    { title: 'Man in Black Badge', href: 'https://homecoming.wiki/wiki/Man_in_Black_Badge' },
    { title: 'Woman in Black Badge', href: 'https://homecoming.wiki/wiki/Woman_in_Black_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/man-in-black.png' },
  ],
}
