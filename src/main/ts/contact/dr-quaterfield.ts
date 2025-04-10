import { ContactData } from 'coh-content-db'
import { FirebaseZulu } from '../zone/firebase-zulu'

export const DrQuaterfield: ContactData = {
  key: 'dr-quaterfield',
  name: 'Dr. Quaterfield',
  title: 'Head Scientist',
  location: { zoneKey: FirebaseZulu.key, coords: [6293, 1088, 2036] },
  levelRange: [40, 44],
  links: [{ title: 'Homecoming Wiki', href: 'https://homecoming.wiki/wiki/Dr._Quaterfield' }],
}
