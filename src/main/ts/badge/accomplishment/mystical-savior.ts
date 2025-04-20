import { BadgeData } from 'coh-content-db'
import { TrackDownThePantheonAndRescueTheMystics } from '../../mission/track-down-the-pantheon-and-rescue-the-mystics'

export const MysticalSavior: BadgeData = {
  type: 'accomplishment',
  key: 'mystical-savior',
  setTitleId: [77],
  name: [
    { alignment: 'hero', value: 'Mystical Savior' },
    { alignment: 'villain', value: 'Mystical Adept' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You saved a cabal of mystics from being used by the Banished Pantheon.',
  links: [
    { title: 'Mystical Savior Badge', href: 'https://homecoming.wiki/wiki/Mystical_Savior_Badge' },
    { title: 'Mystical Adept Badge', href: 'https://homecoming.wiki/wiki/Mystical_Adept_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mystical-savior.png',
  requirements: [
    { key: TrackDownThePantheonAndRescueTheMystics.key, type: 'mission', missionKey: TrackDownThePantheonAndRescueTheMystics.key },
  ],
}
