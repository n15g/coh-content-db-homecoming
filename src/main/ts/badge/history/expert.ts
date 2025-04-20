import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { PerezPark } from '../../zone/perez-park'
import { SkywayCity } from '../../zone/skyway-city'

export const Expert: BadgeData = {
  type: 'history',
  key: 'expert',
  setTitleId: [149],
  name: 'Expert',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the Might for Right Act.`,
  links: [
    { title: 'Expert Badge', href: 'https://homecoming.wiki/wiki/Expert_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'expe-0',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [634, 6.4, 826.4], icon: 'plaque', iconText: '4' },
      monumentText: `This statue honors Georgia Reynolds, one of the first heroes to publicly challenge the Might for Right Act.
Although she fought the conscription of heroes under this act, she later joined the armed forces and performed many services for her country under the code name Nimbus.
She is best remembered for her service during the Rikti War, when she and the rest of Alpha Team assaulted the Rikti's entrenched positions, buying Omega Team time to sneak into the Rikti barracks and enter the portal to the Rikti homeworld.`,
      notes: `Located beneath the statue 182 yards west of the Sewer Network entrance or 166 yards east of the ${zoneLink(SkywayCity)} entrance.`,
    },
    {
      key: 'expe-1',
      type: 'monument',
      location: { zoneKey: EchoGalaxyCity.key, coords: [1160, 36, -711], icon: 'pedestal', iconText: '3' },
      monumentText: `Roger Vrabel of the CIA appeared on this spot to speak in favor of the Might For Right Act in 1967.
He said, 'The heroes of this country are our most valuable natural resource.
Without their service, we cannot hope to overcome the foes that assail us.'
Althought Vrabel spoke with conviction and passion, the act was overturned later that same year.`,
      notes: `Located 242 yards due west of the Freedom Court neighborhood marker.`,
    },
    {
      key: 'expe-2',
      type: 'monument',
      location: { zoneKey: EchoGalaxyCity.key, coords: [413, 8, 890], icon: 'plaque', iconText: '4' },
      monumentText: `In 1967, these streets were filled with protestors railing against the Might For Right Act.
The country had united behind the cause of three African-American heroes, who claimed that the CIA was discriminating against minorities by targeting them for conscription.`,
      notes: `Located 147 yards southeast of the Nebula District neighborhood marker.`,
    },
    {
      key: 'expe-3',
      type: 'monument',
      location: { zoneKey: PerezPark.key, coords: [-1277, -30, 941], icon: 'pedestal', iconText: '4' },
      monumentText: `On this spot, operatives from the CIA attempted to arrest Roger Washington, Georgia Reynolds, and Hakeem Muhammad, young African-American heroes who had refused to be drafted under the Might For Right Act.
The operatives were shocked to find not just the three youths, but a whole battalion of heroes who had flocked to their cause. The battle over the Might For Right Act had begun.`,
      notes: `Located 455 yards south of the Steel Canyon entrance.`,
    },
  ],
}
