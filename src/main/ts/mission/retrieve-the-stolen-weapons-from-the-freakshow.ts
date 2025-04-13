import { MissionData } from 'coh-content-db'
import { VicGarland } from '../contact/vic-garland'
import { JakeKim } from '../contact/jake-kim'
import { WilmaPeterson } from '../contact/wilma-peterson'
import { AndrewFiore } from '../contact/andrew-fiore'
import { ClaireChildress } from '../contact/claire-childress'
import { LtColHughMcDougal } from '../contact/lt-col-hugh-mcdougal'

export const RetrieveTheStolenWeaponsFromTheFreakshow: MissionData = {
  key: 'retrieve-the-stolen-weapons-from-the-freakshow',
  name: 'Retrieve the stolen weapons from the Freakshow',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [WilmaPeterson.key, AndrewFiore.key, ClaireChildress.key, LtColHughMcDougal.key, JakeKim.key, VicGarland.key],
  levelRange: [20, 24],
  links: [
    { title: '(Wilma Peterson) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Wilma_Peterson#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
    { title: '(Andrew Fiore) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Andrew_Fiore#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
    { title: '(Claire Childress) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Claire_Childress#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
    { title: '(Lt. Col. Hugh McDougal) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Lt._Col._Hugh_McDougal#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
    { title: '(Jake Kim) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Jake_Kim#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
    { title: '(Vic Garland) Retrieve the stolen weapons from the Freakshow', href: 'https://homecoming.wiki/wiki/Vic_Garland#Retrieve_the_stolen_weapons_from_the_Freakshow_(20-24)' },
  ],
  flashback: {
    id: '0.13',
    levelRange: [20, 24],
  },
}
