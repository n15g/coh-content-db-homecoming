import { MissionData } from 'coh-content-db'
import { TheRadio } from '../contact/the-radio'

export const StealOutbreakDrugFromTheLostAndThenTakeItToTheDropOffPoint: MissionData = {
  key: 'steal-outbreak-drug-from-the-lost-and-then-take-it-to-the-drop-off-point',
  name: `Steal 'outbreak' drug from the Lost and then take it to the drop-off point`,
  type: 'mission',
  morality: 'villainous',
  contactKeys: TheRadio.key,
  levelRange: [10, 14],
  links: [
    { title: `Steal 'outbreak' drug from the Lost and then take it to the drop-off point`, href: `https://homecoming.wiki/wiki/The_Radio#Steal_'outbreak'_drug_from_the_Lost_and_then_take_it_to_the_drop-off_point_(10-14)` },
  ],
  flashback: {
    id: '6.13',
    name: 'Steal the Outbreak virus',
    levelRange: [10, 14],
  },
}
