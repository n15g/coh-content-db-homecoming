import { BadgeData } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'

export const MisfitMonstrosity: BadgeData = {
  type: 'exploration',
  key: 'misfit-monstrosity',
  setTitleId: [1874],
  name: 'Misfit Monstrosity',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `On this distant, lonely island you find some Devouring Earth monsters who seem to have separated themselves from their brethren,
or perhaps they were relegated this isle for some reason.
What kind of rules must govern these creatures that some of their number could be found wanting? Were their rampages not destructive enough?
Their roars not bladder-emptyingly terrifying enough?
Did they fail to pay the proper obeisance to Hamidon, their lord and master?
It matters not, they seem just as interested in grinding you underfoot as any other monster here.`,
  notes: `Located 249 yards northwest of the Tempest Quay marker, near the northern edge of the small island.`,
  links: [
    { title: 'Misfit Monstrosity Badge', href: 'https://homecoming.wiki/wiki/Misfit_Monstrosity_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MonsterIsland.key, coords: [2931, 0, -7405], icon: 'badge', iconText: '7' } },
  ],
}
