import { BadgeData } from 'coh-content-db'

export const TheReallyHardWay: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'the-really-hard-way',
  setTitle: { id: 2238 },
  name: [
    { value: 'The Really Hard Way' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have accomplished that which was seemingly impossible - defeating the champion of the Well '
        + 'of the Furies while he was at his full power!  Congratulations to you - you are one of the '
        + 'strongest superpowered beings ever to walk the multiverse.',
    },
  ],
  acquisition: 'Defeat Tyrant during the final battle of the Magisterium Trial without destroying any Lights of the Well',
  links: [
    { title: 'The Really Hard Way Badge', href: 'https://homecoming.wiki/wiki/The_Really_Hard_Way_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/magisterium-3.png' },
  ],
}
