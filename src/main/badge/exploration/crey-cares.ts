import { BadgeData } from 'coh-content-db'
import { CreysFolly } from '../../map/creys-folly'

export const CreyCares: BadgeData = {
  type: 'EXPLORATION',
  key: 'crey-cares',
  setTitle: { id: 1794 },
  name: [{ value: 'Crey Cares' }],
  alignment: ['H'],
  mapKey: CreysFolly.key,
  loc: [3263, 104, 1279],
  badgeText: [{
    value: 'Crey Industries has taken over this island in the Water Processing district with the intention of using its extensive collection and filtration infrastructure to spearhead a plan'
      + ' that would clear from the air and water the strange toxic element that emerged after the Rikti invasion.'
      + ' But those who know the truth, and are not intimidated into silence, know that Crey is actually collecting and concentrating this element for unknown purposes.',
  }],
  notes: 'Located in [map:creys-folly] 160 yards WSW of the Paragon Water Works marker, on top of the ducts running between the cooling towers.',
  links: [
    { title: 'Crey Cares Badge', href: 'https://homecoming.wiki/wiki/Crey_Cares_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
