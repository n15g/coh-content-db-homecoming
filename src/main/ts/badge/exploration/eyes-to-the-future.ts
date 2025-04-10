import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const EyesToTheFuture: BadgeData = {
  type: 'exploration',
  key: 'eyes-to-the-future',
  setTitleId: [1404],
  name: 'Eyes to the Future',
  morality: 'all',
  badgeText: `From here, one can see further than even Emperor Cole. Do you see death? Darkness? Perhaps you see the coming doom of being smashed by a Tyrant or devoured by the Earth?`,
  notes: `Located 400 yards NE of the Neuron's Reach marker, at the very top of Neuron's tower.`,
  links: [
    { title: 'Eyes to the Future Badge', href: 'https://homecoming.wiki/wiki/Eyes_to_the_Future_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [1854, 974, -648], icon: 'badge', iconText: '3' } },
  ],
}
