import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const WitnessForTheFallen: BadgeData = {
  type: 'exploration',
  key: 'witness-for-the-fallen',
  setTitleId: [2055],
  name: 'Witness for the Fallen',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `The first statue ever erected in honor of Marcus Cole now stands as a mute reminder of what was lost when the Devouring Earth attacked First Ward.
The ossified tendrils of Hamidon coil about it, but never reach it as though checked by Cole's majesty, or so his loyalists would like to think.
Members of the Resistance who have made the trek out to this flooded region mock the statue and its current state: seeing it as a visual metaphor for Cole's hubris and eventual downfall.`,
  notes: `Located in the Sunken City neighborhood, 163 yards NNW of the Westerman Building marker, on the shoulder of a partially submerged statue of Emperor Cole.`,
  links: [
    { title: 'Witness for the Fallen Badge', href: 'https://homecoming.wiki/wiki/Witness_for_the_Fallen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirstWard.key, coords: [181, 13, -677], icon: 'badge', iconText: '8' } },
  ],
}
