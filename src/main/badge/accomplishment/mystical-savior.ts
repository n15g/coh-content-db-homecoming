import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { LauraBrunetti } from '../../contact/laura-brunetti'
import { MiriamBloechl } from '../../contact/miriam-bloechl'

export const MysticalSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mystical-savior',
  setTitle: { id: 77 },
  name: [
    { alignment: 'H', value: 'Mystical Savior' },
    { alignment: 'V', value: 'Mystical Adept' },
  ],
  alignment: ['H'],
  badgeText: 'You saved a cabal of mystics from being used by the Banished Pantheon.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Find the Pantheon: Rescue the Mystics" entry with number 0.18 in the 25-29 level range.`,
  links: [
    { title: 'Mystical Savior Badge', href: 'https://homecoming.wiki/wiki/Mystical_Savior_Badge' },
    { title: 'Mystical Adept Badge', href: 'https://homecoming.wiki/wiki/Mystical_Adept_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mystical-savior.png',
  requirements: [
    { key: 'track-down-the-pantheon', type: 'MISSION', missionName: 'Track Down the Pantheon and Rescue the Mystics', contactKey: [LauraBrunetti.key, MiriamBloechl.key] },
  ],
}
