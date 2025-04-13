import { MissionData } from 'coh-content-db'
import { InterrogatorKang } from '../contact/interrogator-kang'

export const SacrificesMustBeMade: MissionData = {
  key: 'sacrifices-must-be-made',
  name: 'Sacrifices Must Be Made',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: InterrogatorKang.key,
  levelRange: [8, 15],
  links: [
    { title: 'Sacrifices Must Be Made', href: 'https://homecoming.wiki/wiki/Interrogator_Kang#Sacrifices_Must_Be_Made' },
  ],
  flashback: {
    id: '18.17',
    levelRange: [15, 19],
    morality: 'all',
  },
}
