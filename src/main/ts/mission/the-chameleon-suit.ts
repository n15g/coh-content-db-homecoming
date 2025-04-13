import { MissionData } from 'coh-content-db'
import { ClaireChildress } from '../contact/claire-childress'
import { AndrewFiore } from '../contact/andrew-fiore'
import { VicGarland } from '../contact/vic-garland'
import { JakeKim } from '../contact/jake-kim'
import { LtColHughMcDougal } from '../contact/lt-col-hugh-mcdougal'
import { WilmaPeterson } from '../contact/wilma-peterson'

export const TheChameleonSuit: MissionData = {
  key: 'the-chameleon-suit',
  name: 'The Chameleon Suit',
  type: 'personal-story',
  morality: 'heroic',
  contactKeys: [ClaireChildress.key, AndrewFiore.key, VicGarland.key, JakeKim.key, LtColHughMcDougal.key, WilmaPeterson.key],
  levelRange: [20, 24],
  links: [
    { title: 'The Chameleon Suit', href: 'https://homecoming.wiki/wiki/Andrew_Fiore#The_Chameleon_Suit_(20-24)' },
  ],
  flashback: {
    id: '0.12',
    levelRange: [20, 24],
  },
}
