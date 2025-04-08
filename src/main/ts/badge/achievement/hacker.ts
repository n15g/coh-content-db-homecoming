import { BadgeData, contactLink } from 'coh-content-db'
import { TinMageMarkII } from '../../contact/tin-mage-mark-ii'

export const Hacker: BadgeData = {
  type: 'achievement',
  key: 'hacker',
  setTitleId: [1761],
  name: 'Hacker',
  morality: 'all',
  badgeText: 'You managed to destroy the War Walkers within the secret Praetorian warehouse before the security team could be activated.',
  acquisition: `Click all 8 devices within 30 seconds of entering the warehouse in the first mission of the ${contactLink(TinMageMarkII)} Task Force.`,
  links: [
    { title: 'Hacker Badge', href: 'https://homecoming.wiki/wiki/Hacker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png',
}
