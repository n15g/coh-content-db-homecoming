import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const OrionsBelt: BadgeData = {
  type: 'exploration',
  key: 'orions-belt',
  setTitleId: [1524],
  name: `Orion's Belt`,
  morality: 'paragon-city-access',
  badgeText: `This statue commemorates the hero Orion, whom Orion Beltway was renamed after.
During the first Rikti War, Orion fought valiantly against the Rikti, saving the people of this small district. He was remembered, in particular, as the hero with no real powers beyond his knowledge of martial arts.`,
  notes: `Located in the Orion Beltway neighborhood at the base of the statue 269 yards ESE of the neighborhood marker.`,
  links: [
    { title: `Orion's Belt Badge`, href: 'https://homecoming.wiki/wiki/Orion%27s_Belt_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoGalaxyCity.key, coords: [-1699, 4, -2209], icon: 'badge', iconText: '8' } },
  ],
}
