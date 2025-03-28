import { BadgeData, zoneLink } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const SocialWorker: BadgeData = {
  type: 'EXPLORATION',
  key: 'social-worker',
  setTitle: { id: 1506 },
  name: [
    { alignment: 'H', value: 'Social Worker' },
    { alignment: 'V', value: 'Slumlord' },
  ],
  alignment: ['V'],
  zoneKey: StMartial.key,
  loc: [-202, -74, -852],
  badgeText: [{
    value: `These slums are known to house people who have lost everything at the Golden Giza. These wanderers have become large enough in numbers to form their own community.`,
  }],
  notes: `Located in ${zoneLink(StMartial)}, in the Black Mariah neighborhood.

It is at the entrance of the underground slums 185 yards northeast of the neighborhood marker.`,
  links: [
    { title: 'Social Worker Badge', href: 'https://homecoming.wiki/wiki/Social_Worker_Badge' },
    { title: 'Slumlord Badge', href: 'https://homecoming.wiki/wiki/Slumlord_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
