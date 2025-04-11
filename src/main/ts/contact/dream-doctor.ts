import { ContactData } from 'coh-content-db'
import { MidnighterClub } from '../zone/midnighter-club'

export const DreamDoctor: ContactData = {
  key: 'dream-doctor',
  name: 'Dream Doctor',
  title: 'Midnighter Club Founder',
  zoneKey: MidnighterClub.key,
  levelRange: [50],
  links: [{ title: 'Dream Doctor', href: 'https://homecoming.wiki/wiki/Dream_Doctor' }],
}
