import { BadgeData } from 'coh-content-db'
import { HydraMissionMap } from '../../map/hydra-missions'

export const Multidimensional: BadgeData = {
  type: 'EXPLORATION',
  key: 'multidimensional',
  setTitle: { id: 172 },
  name: [{ value: 'Multidimensional' }],
  alignment: ['H', 'V', 'P'],
  mapKey: HydraMissionMap.key,
  badgeText: [{
    value: 'The Hydra that lives under Paragon City is rumored to be a refugee from this dimension.',
  }],
  notes: 'This badge is awarded for spending any amount of time on the mission map that appears in either of the Hydra missions from [Tina Macintyre](https://homecoming.wiki/wiki/Tina_Macintyre),'
    + ' or the Hydra mission from [Unai Kemen](https://homecoming.wiki/wiki/Unai_Kemen).\n'
    + '\n'
    + 'The badge is awarded after a random period of time while on the map, or will be rewarded immediately if you leave the map.',
  links: [
    { title: 'Multidimensional Badge', href: 'https://homecoming.wiki/wiki/Multidimensional_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
}
