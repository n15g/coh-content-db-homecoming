import { BadgeData, zoneLink } from 'coh-content-db'
import { PeregrineIsland } from '../../zone/peregrine-island'
import { RiktiWarZone } from '../../zone/rikti-war-zone'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'

export const Academic: BadgeData = {
  type: 'HISTORY',
  key: 'academic',
  setTitle: { id: 159 },
  name: [
    { value: 'Academic' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the successful takeover of Washington, D.C. by Nemesis.` },
  ],
  links: [
    { title: 'Academic Badge', href: 'https://homecoming.wiki/wiki/Academic_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [
    {
      key: 'acad-0',
      type: 'PLAQUE',
      zoneKey: PeregrineIsland.key,
      plaqueType: 'MONUMENT',
      loc: [-1904, 4, -7229],
      plaqueInscription: `In 1945, six members of the Freedom Phalanx met on Peregrine Island to save the world. The clever Dr. Mnemonic had synthesized an antidote to the poison gas Nemesis had released across the country, but it had to be distributed quickly. With only minutes to spare, these six heroes took off across the country carrying large batches of the airborne antidote. They managed to get the antidote to each infected city, preventing a disaster of epic proportions.`,
      notes: `This plaque is in the Cutlass Isles area of ${zoneLink(PeregrineIsland)}. It is at the base of a structural pillar near the middle of the area. It is 159 yards NW of the Cutlass Isles' marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'acad-1',
      type: 'PLAQUE',
      zoneKey: RiktiWarZone.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [2002, 130, -7041],
      plaqueInscription: `On this site, Statesman and Maiden Justice battled a horde of Nemesis's strange steam-powered robots. The robots' fatal flaw was their inability to adapt to new situations; once events started to transpire differently than Nemesis had envisioned, the robots were next to useless. Maiden Justice used her cunning to confound the robots, while Statesman relied on his awesome strength. In the end, they had defeated some six hundred robots, freeing Paragon City from Nemesis's grasp.`,
      notes: `This plaque is in the ${zoneLink(RiktiWarZone)}. It is wall mounted, facing north west on a building north east of the Rikti ship.It is 382 yds NE of Rikti Crash Site Marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'acad-2',
      type: 'PLAQUE',
      zoneKey: AbandonedSewerNetwork.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [465, -568, -1558],
      plaqueInscription: `In 1945, the Freedom Phalanx was determined to thwart Nemesis's campaign to wrest control of the U.S. Paragon City was one of the many major metropolises Nemesis had infected with his strange poison gas. The hero known as the Dark Watcher knew that he had to find the source of the gas. Using his powers of extra-sensory perception, the Dark Watcher journeyed into the bowels of the city. Here, in the sewer network, he found storage tanks full of the gas, slowly leaking their noxious fumes into Paragon City's environment. The Dark Watcher disposed of the gas, making it possible for the city to be cured.`,
      notes: `This plaque is in the ${zoneLink(AbandonedSewerNetwork)} on the left side of the corridor that marks the entrance to Steel Canyon Sector. It is roughly 800 yards west of the Steel Canyon Sewer network entrance. Note that if you go in the regular Sewer Network the rooms will all look the same and you can reach the coordinates below, but the plaque is absent.`,
      vidiotMapKey: '1',
    },
  ],
}
