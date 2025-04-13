import { MissionData } from 'coh-content-db'
import { TinaChung } from '../contact/tina-chung'
import { NealKendrick } from '../contact/neal-kendrick'

export const RescueTheOGaffneyLawFirmFromTheCircleOfThorns: MissionData = {
  key: 'rescue-the-ogaffney-law-firm-from-the-circle-of-thorns',
  name: `Rescue the O'Gaffney Law Firm From the Circle of Thorns`,
  type: 'mission',
  morality: 'heroic',
  contactKeys: [TinaChung.key, NealKendrick.key],
  levelRange: [30, 35],
  links: [
    { title: `Rescue the O'Gaffney law firm from the Circle of Thorns`, href: `https://homecoming.wiki/wiki/Tina_Chung#Rescue_the_O'Gaffney_law_firm_from_the_Circle_of_Thorns_(30-35)` },
  ],
}
