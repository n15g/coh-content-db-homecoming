import { BadgeData, zoneLink } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'
import { StMartial } from '../../zone/st-martial'
import { Warburg } from '../../zone/warburg'
import { Grandville } from '../../zone/grandville'

export const ArachnosRising: BadgeData = {
  type: 'history',
  key: 'arachnos-rising',
  setTitleId: [316],
  name: [
    { value: 'Arachnos Rising' },
  ],
  morality: 'villainous',
  badgeText: [
    { value: `Know your friends -- but know your rivals even better.` },
  ],
  links: [
    { title: 'Arachnos Rising Badge', href: 'https://homecoming.wiki/wiki/Arachnos_Rising_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-v.png' },
  ],
  requirements: [
    {
      key: 'arac-0',
      type: 'PLAQUE',
      zoneKey: SharkheadIsle.key,
      plaqueType: 'MONUMENT',
      loc: [763, 32, -374],
      plaqueInscription: `Sharkhead Isle was a den of pirates, cutthroats, and thieves during the Golden Age of Piracy. When those days ended, it was abandoned and taken over by wildlife. Lord Recluse brought true prosperity to Sharkhead when bauxite was discovered and the Cage Consortium given the license to exploit it.`,
      notes: `From the Black Heart Memorial Hospital, walk west down the road. When you arrive at a slightly offset four-way intersection, turn right (north). When the road turns back to the right (east), keep going straight. There is a building with a large billboard on top of it on the left, and the monument is in the northeast corner of that building.`,
      vidiotMapKey: '2',
    },
    {
      key: 'arac-1',
      type: 'PLAQUE',
      zoneKey: StMartial.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [456, 34, 1230],
      plaqueInscription: `The former corrupt government of the Rogue Isles had a reserve force on this island. Lord Recluse and his glorious revolution would not be denied, however. The holdouts were crushed nearly to the last man. A city was built upon their bones, and eventually became the paradise known as St. Martial.`,
      notes: `This plaque is in ${zoneLink(StMartial)}. Just south of Hardcase, there is a road. The plaque is hanging on the southern wall lining that road. It is 436 yards north and slightly west of the ferry.`,
      vidiotMapKey: '1',
    },
    {
      key: 'arac-2',
      type: 'PLAQUE',
      zoneKey: Warburg.key,
      plaqueType: 'MONUMENT',
      loc: [-1038, 100, -816],
      plaqueInscription: `Warburg is a symbol of Arachnos' strength. The city is dedicated to the many faceless soldiers who have given their lives to the cause of our benevolent dictator during the Arachnos Revolution of 1964. Warburg was once protected by a ring of nuclear-tipped rockets capable of striking both North America and Europe, but those were removed under an extortive 'treaty' with Paragon City in 1982.`,
      notes: `This plaque is in ${zoneLink(Warburg)}, 675 yards due southeast of the Arachnos flier to St. Martial. It is at the southern base of a tall radio tower.`,
      vidiotMapKey: '1',
    },
    {
      key: 'arac-3',
      type: 'PLAQUE',
      zoneKey: Grandville.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [2766, -340, 794],
      plaqueInscription: `President Marchand, the former ruler of the Rogue Isles, was deposed here by Lord Recluse in 1964. Marchand and his minions attempted to hide in the tallest of the buildings here, but the shrewd Master of Spiders simply leveled the entire complex. The following year, Arachnos' new Watchtower was built upon its rubbled remains.`,
      notes: `This plaque is in ${zoneLink(Grandville)}. It is located on the back side of the large tower in The Tangle neighborhood (though the plaque itself is in the Spider City neighborhood). Of the three large red windows on the back side of the tower, the plaque is on the left (eastern) side of the base of the rightmost (westernmost) window.`,
      vidiotMapKey: '1',
    },
    {
      key: 'arac-4',
      type: 'PLAQUE',
      zoneKey: Grandville.key,
      plaqueType: 'MONUMENT',
      loc: [1730, -459, 1515],
      plaqueInscription: `The vigilante known as Statesman crept into the Rogue Isles one cold night in 1986 under the pretense of some manufactured disaster in Paragon City. He ambushed the valiant Lord Recluse while he was busy working in his Watchtower on the betterment of mankind and attempted to assassinate him. The Master of Spiders was not so easily slain, however, and quickly turned the tables on his would-be murderer. Statesman, beaten and bloody, limped off into the night to lick his wounds and plot further mayhem on our benevolent Lord Recluse.`,
      notes: `This plaque is in ${zoneLink(Grandville)}, 340 yard due east of the Spider City marker. It is in The Gutter neighborhood, just outside the wall around Spider City.`,
      vidiotMapKey: '2',
    },
  ],
}
