import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const FistOfFury: BadgeData = {
  type: 'exploration',
  key: 'fist-of-fury',
  setTitleId: [1859],
  name: 'Fist of Fury',
  morality: 'paragon-city-access',
  badgeText: `You have come to realize that emotion is an elemental force in the Shadow Shard, that the storms that sweep through this place are composed of emotional residue.
You have spent enough time here to gain an intrinsic sense of these emotional ebbs and flows.
Here you can feel these warping concentrations of Rularuu's fury yet you are able to make them your own, adding your own feelings of anger at the danger posed by Rularuu.
You summon images of Rularuu's minions running rampant upon your beloved homeworld and are filled with a rising fury.`,
  notes: `Located 272 yards NNW of the Lock of Fury marker, on the larger island in the corner closest to the smaller island.`,
  links: [
    { title: 'Fist of Fury Badge', href: 'https://homecoming.wiki/wiki/Fist_of_Fury_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheStormPalace.key, coords: [-4458, 1859, -63], icon: 'badge', iconText: '6' } },
  ],
}
