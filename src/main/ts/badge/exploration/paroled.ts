import { BadgeData } from 'coh-content-db'
import { StMartial } from '../../zone/st-martial'

export const Paroled: BadgeData = {
  type: 'exploration',
  key: 'paroled',
  setTitleId: [280],
  name: [
    { alignment: 'hero', value: 'Paroled' },
    { alignment: 'villain', value: 'Crimelord' },
  ],
  morality: 'rogue-isles-access',
  badgeText: [
    { alignment: 'hero', value: `Most of Paragon City agrees that you've paid your debt to society. Most, but not all.` },
    { alignment: 'villain', value: `The weeds of crime bear bitter fruit.` },
  ],
  notes: `Located in the Fortune's Wheel neighborhood, approximately 138 yards west of its marker. The badge can be found at the base of a tree along a fractured road leading out of the Black Mariah neighborhood.`,
  links: [
    { title: 'Paroled Badge', href: 'https://homecoming.wiki/wiki/Paroled_Badge' },
    { title: 'Crimelord Badge', href: 'https://homecoming.wiki/wiki/Crimelord_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: StMartial.key, coords: [-896, 9, -1496], icon: 'badge', iconText: '2' } },
  ],
}
