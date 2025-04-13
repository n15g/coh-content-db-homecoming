import { MissionData } from 'coh-content-db'
import { DrTrevorSeaborn } from '../contact/dr-trevor-seaborn'
import { HugoRedding } from '../contact/hugo-redding'
import { HaleyPhilips } from '../contact/haley-philips'

export const RescueFortuneTellerFromTheCircleOfThorns: MissionData = {
  key: 'rescue-fortune-teller-from-the-circle-of-thorns',
  name: 'Rescue Fortune Teller from the Circle of Thorns',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [DrTrevorSeaborn.key, HugoRedding.key, HaleyPhilips.key],
  levelRange: [9, 14],
  links: [
    { title: '(Dr. Trevor Seaborn) Rescue Fortune Teller from the Circle of Thorns', href: 'https://homecoming.wiki/wiki/Dr._Trevor_Seaborn#Rescue_Fortune_Teller_from_the_Circle_of_Thorns_(9-14)' },
    { title: '(Hugo Redding) Rescue Fortune Teller from the Circle of Thorns', href: 'https://homecoming.wiki/wiki/Hugo_Redding#Rescue_Fortune_Teller_from_the_Circle_of_Thorns_(9-14)' },
    { title: '(Haley Philips) Rescue Fortune Teller from the Circle of Thorns', href: 'https://homecoming.wiki/wiki/Haley_Philips#Rescue_Fortune_Teller_from_the_Circle_of_Thorns_(9-14)' },
  ],
  flashback: {
    id: '0.02',
    name: 'Rescue the Mystic from the Circle of Thorns',
    levelRange: [10, 14],
  },
}
