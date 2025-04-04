import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const VisionOfDespair: BadgeData = {
  type: 'exploration',
  key: 'vision-of-despair',
  setTitleId: [116],
  name: 'Vision of Despair',
  morality: 'heroic',
  zoneKey: Boomtown.key,
  loc: [-754, 0, -595],
  badgeText: 'An unnatural feeling of dread permeates the area in what is now called the Pit of Despair.',
  notes: 'The Vision of Despair Badge is located in a pit 470 yards east of the Grenadier Village marker - or 1.19 miles NNW of the gate to Steel Canyon.'
    + ' It is located between the Grenadier neighborhood and the Cannonade neighborhood of Boomtown.'
    + '\n\nLooking east from the Grenadier marker, one can see a tunnel with a road over it. Left (north) of the tunnel, there is a long wall that leads into a dead-end pit at the bottom of'
    + ' three high walls. The badge marker is at the end of that pit next to an old dumpster. The marker is in that pit.',
  links: [
    { title: 'Vision of Despair Badge', href: 'https://homecoming.wiki/wiki/Vision_of_Despair_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '3',
}
