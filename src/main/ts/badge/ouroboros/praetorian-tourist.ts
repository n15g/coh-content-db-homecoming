import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'

export const PraetorianTourist: BadgeData = {
  type: 'ouroboros',
  key: 'praetorian-tourist',
  setTitleId: [1474],
  name: 'Praetorian Tourist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've traveled to Praetoria under the guidance of the Menders of Ouroboros, earning yourself the Praetorian Tourist badge.`,
  acquisition: `Complete a Praetorian arc through ${zoneLink(Ouroboros)}.`,
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/praetorian-tourist.png',
}
