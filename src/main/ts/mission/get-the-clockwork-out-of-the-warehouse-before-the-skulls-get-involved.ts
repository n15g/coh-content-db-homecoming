import { MissionData } from 'coh-content-db'
import { PaulaDempsey } from '../contact/paula-dempsey'
import { TonyKord } from '../contact/tony-kord'

export const GetTheClockworkOutOfTheWarehouseBeforeTheSkullsGetInvolved: MissionData = {
  key: 'get-the-clockwork-out-of-the-warehouse-before-the-skulls-get-involved',
  name: 'Get the Clockwork out of the warehouse before the Skulls get involved',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [PaulaDempsey.key, TonyKord.key],
  levelRange: [5, 10],
  links: [
    { title: 'Get the Clockwork out of the warehouse before the Skulls get involved', href: 'https://homecoming.wiki/wiki/Tony_Kord#Get_the_Clockwork_out_of_the_warehouse_before_the_Skulls_get_involved_(5-10)' },
  ],
  flashback: {
    id: '0.01',
    name: 'Break up the Clockwork and the skulls',
    levelRange: [1, 9],
  },
}
