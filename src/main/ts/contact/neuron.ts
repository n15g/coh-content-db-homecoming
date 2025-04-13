import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const Neuron: ContactData = {
  key: 'neuron',
  name: 'Neuron',
  title: 'Praetor of the Sciences',
  morality: 'loyalist',
  location: { zoneKey: Neutropolis.key, coords: [1682, -51, -643] },
  levelRange: [14, 20],
  links: [{ title: 'Neuron', href: 'https://homecoming.wiki/wiki/Neuron' }],
}
