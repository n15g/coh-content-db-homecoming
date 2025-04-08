import { BadgeData, zoneLink } from 'coh-content-db'
import { ImperialCity } from '../../zone/imperial-city'

export const TakedownArtist: BadgeData = {
  type: 'accomplishment',
  key: 'takedown-artist',
  setTitleId: [1420],
  name: 'Takedown Artist',
  morality: 'all',
  badgeText: `You've taken down one of the big guys in the Syndicate. Hey, is that a bull's-eye on your back?`,
  acquisition: `Complete the Syndicate Takedown zone event in ${zoneLink(ImperialCity)}.`,
  links: [
    { title: 'Takedown Artist Badge', href: 'https://homecoming.wiki/wiki/Takedown_Artist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/takedown-artist.png',
}
