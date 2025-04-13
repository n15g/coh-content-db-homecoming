import { MissionData } from 'coh-content-db'
import { Flux } from '../contact/flux'

export const FluxTheOutcast: MissionData = {
  key: 'flux-the-outcast',
  name: 'Flux the Outcast',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: Flux.key,
  levelRange: [5, 14],
  links: [
    { title: 'Flux the Outcast', href: 'https://homecoming.wiki/wiki/Flux#Flux_the_Outcast_(5-14)' },
  ],
  flashback: {
    id: '2.02',
    levelRange: [10, 14],
  },
}
