import { BadgeData, zoneLink } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const MisfitMonstrosity: BadgeData = {
  type: 'EXPLORATION',
  key: 'misfit-monstrosity',
  setTitle: { id: 1874 },
  name: [{ value: 'Misfit Monstrosity' }],
  alignment: ['V'],
  zoneKey: MonsterIsland.key,
  loc: [2931, 0, -7405],
  badgeText: [{
    value: `On this distant, lonely island you find some Devouring Earth monsters who seem to have separated themselves from their brethren,
            or perhaps they were relegated this isle for some reason.
            What kind of rules must govern these creatures that some of their number could be found wanting? Were their rampages not destructive enough?
            Their roars not bladder-emptyingly terrifying enough?
            Did they fail to pay the proper obeisance to Hamidon, their lord and master?
            It matters not, they seem just as interested in grinding you underfoot as any other monster here.`,
  }],
  notes: `Located in ${zoneLink(MonsterIsland)}, 249 yards northwest of the Tempest Quay marker, near the northern edge of the small island.`,
  links: [
    { title: 'Misfit Monstrosity Badge', href: 'https://homecoming.wiki/wiki/Misfit_Monstrosity_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
