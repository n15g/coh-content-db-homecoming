import { MissionData } from 'coh-content-db'
import { Scirocco } from '../contact/scirocco'

export const TheSpiritCityOfHequat: MissionData = {
  key: 'the-spirit-city-of-hequat',
  name: 'The Spirit City of Hequat',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: Scirocco.key,
  levelRange: [45],
  links: [
    { title: 'The Spirit City of Hequat', href: 'https://homecoming.wiki/wiki/Scirocco#The_Spirit_City_of_Hequat_(45-50)' },
  ],
  flashback: {
    id: '7.52',
    levelRange: [50],
  },
}
