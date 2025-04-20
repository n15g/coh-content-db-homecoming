import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const Dauntless: BadgeData = {
  type: 'exploration',
  key: 'dauntless',
  setTitleId: [112],
  name: 'Dauntless',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Dauntless was Galaxy Girl's sidekick until he died in battle, defending his mentor with his last breath.`,
  notes: `Located at the southern end of the Hide Park neighborhood.
Along the southeastern north–south wall stands a large statue of Dauntless flexing his arms. The badge is positioned approximately 60 feet in front of the statue.`,
  links: [
    { title: 'Dauntless Badge', href: 'https://homecoming.wiki/wiki/Dauntless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SkywayCity.key, coords: [-706, 0, -1077], icon: 'badge', iconText: '3' } },
  ],
}
