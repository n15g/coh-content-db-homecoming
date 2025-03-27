import { BadgeData, mapLink } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const EyesToTheFuture: BadgeData = {
  type: 'EXPLORATION',
  key: 'eyes-to-the-future',
  setTitle: { id: 1404 },
  name: [{ value: 'Eyes to the Future' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [1854, 974, -648],
  badgeText: [{
    value: 'From here, one can see further than even Emperor Cole. Do you see death? Darkness? Perhaps you see the coming doom of being smashed by a Tyrant or devoured by the Earth?',
  }],
  notes: `Located in ${mapLink(Neutropolis)} 400 yards NE of the Neuron's Reach marker, at the very top of Neuron's tower.`,
  links: [
    { title: 'Eyes to the Future Badge', href: 'https://homecoming.wiki/wiki/Eyes_to_the_Future_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '3',
}
