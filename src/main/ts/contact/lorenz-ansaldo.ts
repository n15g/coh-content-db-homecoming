import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const LorenzAnsaldo: ContactData = {
  key: 'lorenz-ansaldo',
  name: 'Lorenz Ansaldo',
  title: 'Family Associate',
  morality: 'villainous',
  location: { zoneKey: SharkheadIsle.key, coords: [697, 32, -1060] },
  levelRange: [20, 24],
  links: [{ title: 'Lorenz Ansaldo', href: 'https://homecoming.wiki/wiki/Lorenz_Ansaldo' }],
}
