import { MissionData } from 'coh-content-db'
import { PhillipaMeraux } from '../contact/phillipa-meraux'

export const RescueTheEngineersAndPreventTheRiktiFromBringingDownTheForceFields: MissionData = {
  key: 'rescue-the-engineers-and-prevent-the-rikti-from-bringing-down-the-force-fields',
  name: 'Rescue the engineers and prevent the Rikti from bringing down the force fields',
  type: 'mission',
  morality: 'heroic',
  contactKeys: PhillipaMeraux.key,
  levelRange: [30, 35],
  links: [
    { title: 'Rescue the engineers and prevent the Rikti from bringing down the force fields', href: 'https://homecoming.wiki/wiki/Phillipa_Meraux#Rescue_the_engineers_and_prevent_the_Rikti_from_bringing_down_the_force_fields_(30-35)' },
  ],
  flashback: {
    id: '0.28',
    name: 'Defend the War Walls',
    levelRange: [30, 34],
  },
}
