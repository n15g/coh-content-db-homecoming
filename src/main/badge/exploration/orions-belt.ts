import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../map/echo-galaxy-city'

export const OrionsBelt: BadgeData = {
  type: 'EXPLORATION',
  key: 'orions-belt',
  setTitle: { id: 1524 },
  name: [{ value: 'Orion\'s Belt' }],
  alignment: ['H'],
  mapKey: EchoGalaxyCity.key,
  loc: [-1699, 4, -2209],
  badgeText: [{
    value: 'This statue commemorates the hero Orion, whom Orion Beltway was renamed after.'
      + ' During the first Rikti War, Orion fought valiantly against the Rikti, saving the people of this small district.'
      + ' He was remembered, in particular, as the hero with no real powers beyond his knowledge of martial arts.',
  }],
  notes: 'Located in the Orion Beltway neighborhood of [map:echo-galaxy-city], at the base of the statue 269 yards ESE of the neighborhood marker.',
  links: [
    { title: 'Orion\'s Belt Badge', href: 'https://homecoming.wiki/wiki/Orion%27s_Belt_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
