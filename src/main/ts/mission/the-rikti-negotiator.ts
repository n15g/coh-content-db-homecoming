import { MissionData } from 'coh-content-db'
import { Crimson } from '../contact/crimson'

export const TheRiktiNegotiator: MissionData = {
  key: 'the-rikti-negotiator',
  name: 'The Rikti Negotiator',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: Crimson.key,
  levelRange: [45, 50],
  links: [
    { title: 'The Rikti Negotiator', href: 'https://homecoming.wiki/wiki/Crimson#The_Rikti_Negotiator' },
  ],
  flashback: {
    id: '1.13',
    levelRange: [50],
  },
}
