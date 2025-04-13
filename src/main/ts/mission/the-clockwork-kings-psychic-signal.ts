import { MissionData } from 'coh-content-db'
import { TinaMacintyre } from '../contact/tina-macintyre'

export const TheClockworkKingsPsychicSignal: MissionData = {
  key: 'the-clockwork-kings-psychic-signal',
  name: `The Clockwork King's Psychic Signal`,
  type: 'mission',
  morality: 'heroic',
  contactKeys: TinaMacintyre.key,
  levelRange: [40, 45],
  links: [
    { title: `The Clockwork King's Psychic Signal`, href: `https://homecoming.wiki/wiki/Tina_Macintyre#The_Clockwork_King's_Psychic_Signal_(40-45)` },
  ],
}
