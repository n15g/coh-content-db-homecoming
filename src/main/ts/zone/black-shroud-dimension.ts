import { missionLink, ZoneData } from 'coh-content-db'
import { TakeDownNightstar } from '../mission/take-down-nightstar'
import { BringCitizensToVahzilokSurgeons } from '../mission/bring-citizens-to-vahzilok-surgeons'

export const BlackShroudDimension: ZoneData = {
  key: 'black-shroud-dimension',
  name: 'Black Shroud Dimension',
  type: 'mission',
  notes: `Located in the ${missionLink(TakeDownNightstar)} and ${missionLink(BringCitizensToVahzilokSurgeons)} missions.`,
  links: [{ title: 'Shrouded Badge', href: 'https://homecoming.wiki/wiki/Shrouded_Badge' }],
}
