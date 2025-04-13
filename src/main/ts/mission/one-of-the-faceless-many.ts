import { MissionData } from 'coh-content-db'
import { MuVorkan } from '../contact/muvorkan'

export const OneOfTheFacelessMany: MissionData = {
  key: 'one-of-the-faceless-many',
  name: 'One of the Faceless Many',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: MuVorkan.key,
  levelRange: [50],
  links: [
    { title: 'One of the Faceless Many', href: 'https://homecoming.wiki/wiki/Mu%27Vorkan#One_of_the_Faceless_Many' },
  ],
  flashback: {
    id: '22.10',
    name: `Mu'Vorkan Personal Story`,
    levelRange: [50],
  },
}
