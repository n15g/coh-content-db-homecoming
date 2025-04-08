import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const TheSleeperBelow: BadgeData = {
  type: 'exploration',
  key: 'the-sleeper-below',
  setTitleId: [1785],
  name: 'The Sleeper Below',
  morality: 'paragon-city-access',
  badgeText: `Behold the God Mot, roused from His slumber! Behold the power of his faithful adherents, their prayers strong enough to stir Him from His dreaming!
Behold the crucible of undoing, the maw through which all life shall soon pass so that all shall be unmade;
an end to life, an end to hope, an end to all that respires in this corrupt and fallen world!`,
  notes: `Located 212 yards north of the Moth Cemetery marker, near the base of the ramp beneath the ziggurat.

You'll find the entrance to the ramp on the south-west side, at (1470.1, -80.0, 851.7), in the deep trench surrounding the ziggurat.`,
  links: [
    { title: 'The Sleeper Below Badge', href: 'https://homecoming.wiki/wiki/The_Sleeper_Below_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoDarkAstoria.key, coords: [1431, -77, 673] }, vidiotMapKey: '8' },
  ],
}
