import { MissionData } from 'coh-content-db'
import { HeatherTownshend } from '../contact/heather-townshend'

export const RemnantsOfThePast: MissionData = {
  key: 'remnants-of-the-past',
  name: 'Remnants of the Past',
  type: 'personal-story',
  morality: 'primal',
  contactKeys: HeatherTownshend.key,
  levelRange: [50],
  links: [
    { title: 'Remnants of the Past', href: 'https://homecoming.wiki/wiki/Heather_Townshend#Remnants_of_the_Past' },
  ],
}
