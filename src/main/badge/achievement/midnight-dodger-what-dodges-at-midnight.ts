import { BadgeData, contactLink } from 'coh-content-db'
import { TinMageMarkII } from '../../contact/tin-mage-mark-ii'

export const MidnightDodgerWhatDodgesAtMidnight: BadgeData = {
  type: 'achievement',
  key: 'midnight-dodger-what-dodges-at-midnight',
  setTitleId: [1762],
  name: 'Midnight Dodger What Dodges At Midnight',
  morality: 'all',
  badgeText: `Director 11 may be a master of demolitions, but you showed him you're a master at dodging bombs.`,
  acquisition: `Set off zero proximity mines during the warehouse battle in the first mission of the ${contactLink(TinMageMarkII)} Task Force.`,
  links: [
    { title: 'Midnight Dodger What Dodges At Midnight Badge', href: 'https://homecoming.wiki/wiki/Midnight_Dodger_What_Dodges_at_Midnight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png',
}
