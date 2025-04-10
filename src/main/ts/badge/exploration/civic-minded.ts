import { BadgeData, contactLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'
import { PraetorDuncan } from '../../contact/praetor-duncan'
import { PraetorWhite } from '../../contact/praetor-white'

export const CivicMinded: BadgeData = {
  type: 'exploration',
  key: 'civic-minded',
  setTitleId: [1402],
  name: 'Civic Minded',
  morality: 'all',
  badgeText: `This is the heart of Praetoria. Emperor Cole and his Praetors have put great energy into keeping eyes and ears open for the safety of their citizens.`,
  notes: `Located in the center of the plaza between ${contactLink(PraetorDuncan)} and ${contactLink(PraetorWhite)}.`,
  links: [
    { title: 'Civic Minded Badge', href: 'https://homecoming.wiki/wiki/Civic_Minded_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NovaPraetoria.key, coords: [-4862, 33, -256], icon: 'badge', iconText: '3' } },
  ],
}
