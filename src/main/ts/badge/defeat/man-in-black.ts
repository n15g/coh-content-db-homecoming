import { BadgeData } from 'coh-content-db'

export const ManInBlack: BadgeData = {
  type: 'defeat',
  key: 'man-in-black',
  setTitleId: [312],
  name: [
    { sex: 'M', value: 'Man in Black' },
    { sex: 'F', value: 'Woman in Black' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'These creepy alien parasites are no match for you.',
  acquisition: 'Defeat 200 Shivans.',
  links: [
    { title: 'Man in Black Badge', href: 'https://homecoming.wiki/wiki/Man_in_Black_Badge' },
    { title: 'Woman in Black Badge', href: 'https://homecoming.wiki/wiki/Woman_in_Black_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/man-in-black.png',
}
