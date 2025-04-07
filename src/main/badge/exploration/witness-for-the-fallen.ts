import { BadgeData, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const WitnessForTheFallen: BadgeData = {
  type: 'exploration',
  key: 'witness-for-the-fallen',
  setTitleId: [2055],
  name: 'Witness for the Fallen',
  morality: 'all',
  zoneKey: FirstWard.key,
  loc: [181, 13, -677],
  badgeText: [{
    value: `The first statue ever erected in honor of Marcus Cole now stands as a mute reminder of what was lost when the Devouring Earth attacked First Ward.
The ossified tendrils of Hamidon coil about it, but never reach it as though checked by Cole's majesty, or so his loyalists would like to think.
Members of the Resistance who have made the trek out to this flooded region mock the statue and its current state: seeing it as a visual metaphor for Cole's hubris and eventual downfall.`,
  }],
  notes: `Located in ${zoneLink(FirstWard)} in the Sunken City neighborhood, 163 yards NNW of the Westerman Building marker.
It is on the shoulder of a partially submerged statue of the emperor.`,
  links: [
    { title: 'Witness for the Fallen Badge', href: 'https://homecoming.wiki/wiki/Witness_for_the_Fallen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '8',
}
