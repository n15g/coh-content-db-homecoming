import { MissionData } from 'coh-content-db'
import { MaxwellChristopher } from '../contact/maxwell-christopher'

export const NemesisWeatherControl: MissionData = {
  key: 'nemesis-weather-control',
  name: 'Nemesis Weather Control',
  type: 'mission',
  morality: 'heroic',
  contactKeys: MaxwellChristopher.key,
  levelRange: [40],
  links: [
    { title: 'Nemesis Weather Control', href: 'https://homecoming.wiki/wiki/Maxwell_Christopher#Nemesis_Weather_Control' },
  ],
  flashback: {
    id: '1.06',
    levelRange: [40, 49],
  },
}
