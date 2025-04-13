import { MissionData } from 'coh-content-db'
import { SkipperLeGrange } from '../contact/skipper-legrange'

export const TheWarOfTheFirBolg: MissionData = {
  key: 'the-war-of-the-fir-bolg',
  name: 'The War of the Fir Bolg',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: SkipperLeGrange.key,
  levelRange: [25, 29],
  links: [
    { title: 'The War of the Fir Bolg', href: 'https://homecoming.wiki/wiki/Skipper_LeGrange#The_War_of_the_Fir_Bolg_(25-29)' },
  ],
  flashback: {
    id: '5.02',
    name: 'War of the Fir Bolg',
    levelRange: [30, 34],
  },
}
