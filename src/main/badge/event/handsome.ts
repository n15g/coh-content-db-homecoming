import { BadgeData } from 'coh-content-db'

export const Handsome: BadgeData = {
  type: 'EVENT',
  key: 'handsome',
  setTitle: { id: 527 },
  name: [
    { sex: 'M', value: 'Handsome' },
    { sex: 'F', value: 'Beautiful' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Eros can bring out the beauty in any being' },
  ],
  acquisition: 'This badge is awarded for receiving mission completion rewards for both retrieving the Girdle of Aphrodite for Ganymede'
    + ' and destroying the mystical cauldron for Scratch once during a Valentine\'s Day Event.',
  links: [
    { title: 'Handsome Badge', href: 'https://homecoming.wiki/wiki/Handsome_Badge' },
    { title: 'Beautiful Badge', href: 'https://homecoming.wiki/wiki/Beautiful_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/handsome.png' }],
}
