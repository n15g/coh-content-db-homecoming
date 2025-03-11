import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../map/skyway-city'

export const Dauntless: BadgeData = {
  type: 'EXPLORATION',
  key: 'dauntless',
  setTitle: { id: 112 },
  name: [{ value: 'Dauntless' }],
  alignment: ['H'],
  mapKey: SkywayCity.key,
  loc: [-706, 0, -1077],
  badgeText: [{
    value: 'Dauntless was Galaxy Girl\'s sidekick until he died in battle, defending his mentor with his last breath.',
  }],
  notes: 'The Dauntless Badge is in the southern end of the Hide Park neighborhood of Skyway City.'
    + ' Halfway along the southeastern north-south wall, there is a large statue of Dauntless flexing his arms.'
    + ' The badge marker is sixty feet in front of that statue.',
  links: [
    { title: 'Dauntless Badge', href: 'https://homecoming.wiki/wiki/Dauntless_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
