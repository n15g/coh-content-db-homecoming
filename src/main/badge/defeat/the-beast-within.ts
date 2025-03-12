import { BadgeData } from 'coh-content-db'

export const TheBeastWithin: BadgeData = {
  type: 'DEFEAT',
  key: 'the-beast-within',
  setTitle: { id: 2483 },
  name: [
    { value: 'The Beast Within' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `The way they talk, their irrational paranoia, and other subtle signs can be found in the 5th Column soldiers who have undergone experimental lycanthropy treatments. After experiencing their transformations many times, you've become an expert at drawing out the beast within and vanquishing it.` },
  ],
  acquisition: `Defeat 50 of the 5th Column's lycanthrope soldiers after they have transformed.`,
  links: [
    { title: 'The Beast Within Badge', href: 'https://homecoming.wiki/wiki/The_Beast_Within_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/the-beast-within.png' },
  ],
}
