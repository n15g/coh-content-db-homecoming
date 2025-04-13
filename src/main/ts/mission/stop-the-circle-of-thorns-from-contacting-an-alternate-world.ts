import { MissionData } from 'coh-content-db'
import { CadaoKestrel } from '../contact/cadao-kestrel'

export const StopTheCircleOfThornsFromContactingAnAlternateWorld: MissionData = {
  key: 'stop-the-circle-of-thorns-from-contacting-an-alternate-world',
  name: 'Stop the Circle of Thorns from contacting an alternate world',
  type: 'mission',
  morality: 'heroic',
  contactKeys: CadaoKestrel.key,
  levelRange: [35, 40],
  links: [
    { title: 'Stop the Circle of Thorns from contacting an alternate world', href: 'https://homecoming.wiki/wiki/Cadao_Kestrel#Stop_the_Circle_of_Thorns_from_contacting_an_alternate_world_(35-40)' },
  ],
  flashback: {
    id: '0.39',
    name: `The Arrival of the Oranbegans`,
    levelRange: [35, 39],
  },
}
