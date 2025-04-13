import { BadgeData } from 'coh-content-db'
import { TheChameleonSuit } from '../../mission/the-chameleon-suit'

export const Chameleon: BadgeData = {
  type: 'accomplishment',
  key: 'chameleon',
  setTitleId: [2385],
  name: 'Chameleon',
  morality: 'heroic',
  badgeText: `You infiltrated the Freakshow and recovered the stolen Chameleon Suit.`,
  links: [
    { title: 'Chameleon Badge', href: 'https://homecoming.wiki/wiki/Chameleon_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/chameleon.png',
  requirements: [
    { key: TheChameleonSuit.key, type: 'mission', missionKey: TheChameleonSuit.key },
  ],
}
