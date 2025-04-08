import { ContactData } from 'coh-content-db'
import { Neutropolis } from '../zone/neutropolis'

export const Neuron: ContactData = {
  key: 'neuron',
  name: 'Neuron',
  title: 'Praetor of the Sciences',
  zoneKey: Neutropolis.key,
  loc: [1682, -51, -643],
  levelRange: [14, 20],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Neuron' }],
}
