import { BadgeData, zoneLink } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'
import { StMartial } from '../../zone/st-martial'
import { Warburg } from '../../zone/warburg'
import { Grandville } from '../../zone/grandville'

export const ArachnosRising: BadgeData = {
  type: 'history',
  key: 'arachnos-rising',
  setTitleId: [316],
  name: 'Arachnos Rising',
  morality: 'rogue-isles-access',
  badgeText: `Know your friends -- but know your rivals even better.`,
  links: [
    { title: 'Arachnos Rising Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Rising_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png',
  requirements: [
    {
      key: 'arac-0',
      type: 'monument',
      location: { zoneKey: SharkheadIsle.key, coords: [763, 32, -374], icon: 'pedestal', iconText: '2' },
      monumentText: `Sharkhead Isle was a den of pirates, cutthroats, and thieves during the Golden Age of Piracy.
When those days ended, it was abandoned and taken over by wildlife.
Lord Recluse brought true prosperity to Sharkhead when bauxite was discovered and the Cage Consortium given the license to exploit it.`,
      notes: `Located in the northeast corner of a building with a large billboard, west of Black Heart Memorial Hospital.
From the hospital, head west to the offset four-way intersection, turn right (north), and continue straight when the road curves east.`,
    },
    {
      key: 'arac-1',
      type: 'monument',
      location: { zoneKey: StMartial.key, coords: [456, 34, 1230], icon: 'plaque', iconText: '1' },
      monumentText: `The former corrupt government of the Rogue Isles had a reserve force on this island.
Lord Recluse and his glorious revolution would not be denied, however. The holdouts were crushed nearly to the last man.
A city was built upon their bones, and eventually became the paradise known as St. Martial.`,
      notes: `Located 436 yards north and slightly west of the ferry, on the southern wall lining the road just south of Hardcase.`,
    },
    {
      key: 'arac-2',
      type: 'monument',
      location: { zoneKey: Warburg.key, coords: [-1038, 100, -816], icon: 'pedestal', iconText: '1' },
      monumentText: `Warburg is a symbol of Arachnos' strength.
The city is dedicated to the many faceless soldiers who have given their lives to the cause of our benevolent dictator during the Arachnos Revolution of 1964.
Warburg was once protected by a ring of nuclear-tipped rockets capable of striking both North America and Europe, but those were removed under an extortive 'treaty' with Paragon City in 1982.`,
      notes: `Located 675 yards due southeast of the Arachnos flier to ${zoneLink(StMartial)}, at the southern base of a tall radio tower.`,
    },
    {
      key: 'arac-3',
      type: 'monument',
      location: { zoneKey: Grandville.key, coords: [2766, -340, 794], icon: 'plaque', iconText: '1' },
      monumentText: `President Marchand, the former ruler of the Rogue Isles, was deposed here by Lord Recluse in 1964.
Marchand and his minions attempted to hide in the tallest of the buildings here, but the shrewd Master of Spiders simply leveled the entire complex.
The following year, Arachnos' new Watchtower was built upon its rubbled remains.`,
      notes: `Located on the back side of the large tower in The Tangle neighborhood (though the plaque itself is in the Spider City neighborhood).
Among the three large red windows on the tower’s back side, the plaque is at the base of the rightmost (westernmost) window, on its left (eastern) side.`,
    },
    {
      key: 'arac-4',
      type: 'monument',
      location: { zoneKey: Grandville.key, coords: [1730, -459, 1515], icon: 'pedestal', iconText: '2' },
      monumentText: `The vigilante known as Statesman crept into the Rogue Isles one cold night in 1986 under the pretense of some manufactured disaster in Paragon City.
He ambushed the valiant Lord Recluse while he was busy working in his Watchtower on the betterment of mankind and attempted to assassinate him.
The Master of Spiders was not so easily slain, however, and quickly turned the tables on his would-be murderer.
Statesman, beaten and bloody, limped off into the night to lick his wounds and plot further mayhem on our benevolent Lord Recluse.`,
      notes: `Located 340 yards due east of the Spider City marker, just outside the wall around Spider City, in The Gutter neighborhood.`,
    },
  ],
}
