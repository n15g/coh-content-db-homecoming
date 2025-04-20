import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const HeroCorpsRecruit: BadgeData = {
  type: 'exploration',
  key: 'hero-corps-recruit',
  setTitleId: [107],
  name: [
    { alignment: 'hero', value: 'Hero Corps Recruit' },
    { alignment: 'villain', value: 'Hero Corps Reject' },
  ],
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Hero Corps is not only a Corps of people, but also a Corporation, selling their super-powered services to those willing to foot the bill.`,
  notes: `Located in the Steel Canyon Medical Center neighborhood, just outside and to the right of the door to the hospital, at the southeastern corner of the building.`,
  links: [
    { title: 'Hero Corps Recruit Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Recruit_Badge' },
    { title: 'Hero Corps Reject Badge', href: 'https://homecoming.wiki/wiki/Hero_Corps_Reject_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-1764, 16, 1364], icon: 'badge', iconText: '2' } },
  ],
}
