import { BadgeData, mapLink } from 'coh-content-db'
import { TalosIsland } from '../../map/talos-island'
import { IndependencePort } from '../../map/independence-port'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'
import { TerraVolta } from '../../map/terra-volta'

export const Authority: BadgeData = {
  type: 'HISTORY',
  key: 'authority',
  setTitle: { id: 155 },
  name: [
    { value: 'Authority' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of Freedom Phalanx.` },
  ],
  links: [
    { title: 'Authority Badge', href: 'https://homecoming.wiki/wiki/Authority_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [[
    {
      key: 'auth-0',
      type: 'PLAQUE',
      mapKey: TalosIsland.key,
      plaqueType: 'MONUMENT',
      loc: [1777, 22, 7843],
      plaqueInscription: `When the Freedom Phalanx became the legally recognized Super Group in 1953, a grand celebration was held at this site. Among the attendees was Vambrace, who said, 'I am humbled by the faith you have placed in myself and the Freedom Phalanx. Again and again, the people of this city remind me why it is a place worth fighting for.'`,
      notes: `This plaque is in ${mapLink(TalosIsland)}, at the base of the statue of Talos, behind its left heel.`,
      vidiotMapKey: '1',
    },
    {
      key: 'auth-1',
      type: 'PLAQUE',
      mapKey: IndependencePort.key,
      plaqueType: 'MONUMENT',
      loc: [910, 100, -4175],
      plaqueInscription: `When the Freedom Phalanx became the first legally recognized Super Group in 1953, Statesman held a conference at Valor Bridge. He said, 'The valiant hero Atlas died defending the city on this very bridge. I do not know how to thank you for your faith in the Freedom Phalanx, except to say that I, too, am ready to die in your defense.'`,
      notes: `This plaque is in ${mapLink(IndependencePort)}, at the north end of Valor Bridge, 180 yards south of the Valor Bridge marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'auth-2',
      type: 'PLAQUE',
      mapKey: IndependencePort.key,
      plaqueType: 'MONUMENT',
      loc: [-1035, 36, -2441],
      plaqueInscription: `In 1953, the Freedom Phalanx prevented a ship bearing copious amounts of explosives from docking at this harbor. When the captain was interrogated, it became clear that he was on a mission of sabotage. Public sentiment for the Freedom Phalanx swelled, and Mayor Kyle Legretsky proposed that the Citizens Crime Fighting Act be expanded. He proposed that groups such as the Freedom Phalanx be officially sanctioned fighting forces.`,
      notes: `This plaque is in ${mapLink(IndependencePort)}, along the road west of Icon, 188 yards due west of the Tailor shop.`,
      vidiotMapKey: '2',
    },
    {
      key: 'auth-3',
      type: 'PLAQUE',
      mapKey: EchoDarkAstoria.key,
      plaqueType: 'MONUMENT',
      loc: [3420, 46, 3038],
      plaqueInscription: `When the Freedom Phalanx became an officially recognized Super Group in 1953, the hero Vambrace made a pledge. 'Dark Astoria will be restored to its natural state,' he said. 'The Freedom Phalanx is committed to saving every part of Paragon City, even those that may seem lost.`,
      notes: `This plaque is in ${mapLink(EchoDarkAstoria)}, approximately 178 yards east-southeast from the Toffet Terrace marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'auth-4',
      type: 'PLAQUE',
      mapKey: TerraVolta.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [351, 196, -3605],
      plaqueInscription: `In 1953, citizens poured into the streets in support of the Freedom Phalanx becoming a legally recognized Super Group. The workers of Terra Volta were particularly adamant in their support, having witnessed many villainous activities over the past few decades. Each night, when the factory whistles blew, a shout would go up across the zone, echoing in the evening air: 'Freedom Phalanx! Freedom Phalanx!'`,
      notes: `This plaque is in ${mapLink(TerraVolta)}, 300 yards east by northeast from the Terra Volta Reactor marker.`,
      vidiotMapKey: '1',
    },
  ]],
}
