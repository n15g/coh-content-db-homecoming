import { BadgeData, contactLink } from 'coh-content-db'
import { Ganymede } from '../../contact/ganymede'
import { Scratch } from '../../contact/scratch'

export const Handsome: BadgeData = {
  type: 'event',
  key: 'handsome',
  setTitleId: [527],
  name: [
    { sex: 'M', value: 'Handsome' },
    { sex: 'F', value: 'Beautiful' },
  ],
  morality: 'all',
  badgeText: 'Eros can bring out the beauty in any being',
  acquisition: `Receive mission completion rewards for both "Retrieving the Girdle of Aphrodite" for ${contactLink(Ganymede)} and "Destroying the Mystical Cauldron" for ${contactLink(Scratch)} during a Valentine's Day Event.`,
  links: [
    { title: 'Handsome Badge', href: 'https://homecoming.wiki/wiki/Handsome_Badge' },
    { title: 'Beautiful Badge', href: 'https://homecoming.wiki/wiki/Beautiful_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/handsome.png',
  requirements: [
    { key: 'rtg', type: 'MISSION', missionName: 'Retrieving the Girdle of Aphrodite', contactKey: Ganymede.key },
    { key: 'dtc', type: 'MISSION', missionName: 'Destroying the Mystical Cauldron', contactKey: Scratch.key },
  ],
}
