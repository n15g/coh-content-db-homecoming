import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const Dauntless: BadgeData = {
  type: 'exploration',
  key: 'dauntless',
  setTitleId: [112],
  name: 'Dauntless',
  morality: 'heroic',
  zoneKey: SkywayCity.key,
  loc: [-706, 0, -1077],
  badgeText: `Dauntless was Galaxy Girl's sidekick until he died in battle, defending his mentor with his last breath.`,
  notes: `The Dauntless Badge is in the southern end of the Hide Park neighborhood.

Halfway along the southeastern north-south wall, there is a large statue of Dauntless flexing his arms. The badge marker is sixty feet in front of that statue.`,
  links: [
    { title: 'Dauntless Badge', href: 'https://homecoming.wiki/wiki/Dauntless_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
