import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { EchoGalaxyCity } from '../../map/echo-galaxy-city'
import { PerezPark } from '../../map/perez-park'

export const Expert: BadgeData = {
  type: 'HISTORY',
  key: 'expert',
  setTitle: { id: 149 },
  name: [
    { value: 'Expert' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the Might for Right Act.` },
  ],
  links: [
    { title: 'Expert Badge', href: 'https://homecoming.wiki/wiki/Expert_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [[
    {
      key: 'expe-0',
      type: 'PLAQUE',
      mapKey: AtlasPark.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [634, 6.4, 826.4],
      plaqueInscription: `This statue honors Georgia Reynolds, one of the first heroes to publicly challenge the Might for Right Act. Although she fought the conscription of heroes under this act, she later joined the armed forces and performed many services for her country under the code name Nimbus. She is best remembered for her service during the Rikti War, when she and the rest of Alpha Team assaulted the Rikti's entrenched positions, buying Omega Team time to sneak into the Rikti barracks and enter the portal to the Rikti homeworld.`,
      notes: `This plaque is in ${mapLink(AtlasPark)}, beneath the statue 182 yards west of the Sewer Network entrance or 166 yards east of the Skyway City entrance.`,
      vidiotMapKey: '4',
    },
    {
      key: 'expe-1',
      type: 'PLAQUE',
      mapKey: EchoGalaxyCity.key,
      plaqueType: 'MONUMENT',
      loc: [1160, 36, -711],
      plaqueInscription: `Roger Vrabel of the CIA appeared on this spot to speak in favor of the Might For Right Act in 1967. He said, 'The heroes of this country are our most valuable natural resource. Without their service, we cannot hope to overcome the foes that assail us.' Althought Vrabel spoke with conviction and passion, the act was overturned later that same year.`,
      notes: `This plaque is in ${mapLink(EchoGalaxyCity)}, 242 yards due west of the Freedom Court neighborhood marker.`,
      vidiotMapKey: '3',
    },
    {
      key: 'expe-2',
      type: 'PLAQUE',
      mapKey: EchoGalaxyCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [413, 8, 890],
      plaqueInscription: `In 1967, these streets were filled with protestors railing against the Might For Right Act. The country had united behind the cause of three African-American heroes, who claimed that the CIA was discriminating against minorities by targeting them for conscription.`,
      notes: `This plaque is in ${mapLink(EchoGalaxyCity)}, 147 yards southeast of the Nebula District neighborhood marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'expe-3',
      type: 'PLAQUE',
      mapKey: PerezPark.key,
      plaqueType: 'MONUMENT',
      loc: [-1277, -30, 941],
      plaqueInscription: `On this spot, operatives from the CIA attempted to arrest Roger Washington, Georgia Reynolds, and Hakeem Muhammad, young African-American heroes who had refused to be drafted under the Might For Right Act. The operatives were shocked to find not just the three youths, but a whole battalion of heroes who had flocked to their cause. The battle over the Might For Right Act had begun.`,
      notes: `This plaque is in ${mapLink(PerezPark)}, 455 yards south of the Steel Canyon entrance.`,
      vidiotMapKey: '4',
    },
  ]],
}
