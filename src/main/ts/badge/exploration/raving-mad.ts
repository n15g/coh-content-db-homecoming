import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const RavingMad: BadgeData = {
  type: 'exploration',
  key: 'raving-mad',
  setTitleId: [2453],
  name: 'Raving Mad',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `Before Collier Industrial Park got its much-needed renaissance, the abandoned Collier warehouses had slowly become either self-storage parks or 'criminal-chic' locations for raves that bred influence amongst the gang patrons, namely the Skulls and the Family.`,
  links: [
    { title: 'Raving Mad Badge', href: 'https://homecoming.wiki/wiki/Raving_Mad_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [447.7, 115.4, 3204], icon: 'badge', iconText: '5' } },
  ],
}
