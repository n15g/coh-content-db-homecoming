import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../map/steel-canyon'

export const HeroCorpsRecruit: BadgeData = {
  type: 'EXPLORATION',
  key: 'hero-corps-recruit',
  setTitle: { id: 107 },
  name: [
    { alignment: 'H', value: 'Hero Corps Recruit' },
    { alignment: 'V', value: 'Hero Corps Reject' },
  ],
  alignment: ['H'],
  mapKey: SteelCanyon.key,
  loc: [-1764, 16, 1364],
  badgeText: [{
    value: 'Hero Corps is not only a Corps of people, but also a Corporation, selling their super-powered services to those willing to foot the bill.',
  }],
  notes: 'The Hero Corps Recruit Badge is in the Steel Canyon Medical Center neighborhood.'
    + '\n\nIt is located just outside and to the right of the door to the hospital, at the southeastern corner of the building.',
  links: [
    { title: 'Hero Corps Recruit Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Recruit_Badge' },
    { title: 'Hero Corps Reject Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Reject_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '2',
}
