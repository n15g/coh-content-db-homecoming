import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { KingsRow } from '../../zone/kings-row'
import { PerezPark } from '../../zone/perez-park'

export const Pupil: BadgeData = {
  type: 'HISTORY',
  key: 'pupil',
  setTitle: { id: 174 },
  name: [
    { value: 'Pupil' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the fallen hero, Atlas.` },
  ],
  links: [
    { title: 'Pupil Badge', href: 'https://homecoming.wiki/wiki/Pupil_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [[
    {
      key: 'pupi-0',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [495.2, 4.3, -1132.9],
      plaqueInscription: `On this spot the titanic hero Atlas was posthumously awarded a key to the city for his many valiant efforts on behalf of its citizens.`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, at the northwest corner of Atlas Plaza and just south of the Paragon City Monorail.`,
      vidiotMapKey: '1',
    },
    {
      key: 'pupi-1',
      type: 'PLAQUE',
      zoneKey: EchoGalaxyCity.key,
      plaqueType: 'MONUMENT',
      loc: [-752, 5, -1550],
      plaqueInscription: `On this street in 1939, a parade was held to honor the hero Atlas. Though Atlas' nemesis, the Teal Serpent, tried to interrupt the festivities with a poison gas bomb, Atlas saved the spectators by scooping them up to sit on his mighty shoulders, far above the fumes. After getting the citizens to safety, Atlas sought out the Teal Serpent and defeated him. It is unknown whether the Serpent survived.`,
      notes: `This plaque is in ${zoneLink(EchoGalaxyCity)}, 132 yards due north of the Arena, almost right on top of the Equinox neighborhood marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'pupi-2',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-170, -42, -1467],
      plaqueInscription: `On July 12, 1932, this apartment building caught fire. Although fire fighters evacuated the residents, they were unable to contain the blaze. If not for the mighty hero Atlas, the entire neighborhood might have been lost. He arrived in time to clap out the flames with his massive hands.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, 642 yards due south of the Galaxy City entrance, or 412 yards south-east of the High Park marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'pupi-3',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-400, 4, 1760],
      plaqueInscription: `The building that used to stand in this spot was destroyed by the archvillain known only as the Teal Serpent. While Statesman battled the Serpent in an epic battle that raged for miles, the monumental Atlas turned his attention to the people trapped inside the rubble. With a gentleness to rival his strength, he picked apart the ruins with his massive fingers, freeing 243 people who would otherwise have perished.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, 188 yards southwest of Blue Steel.`,
      vidiotMapKey: '2',
    },
    {
      key: 'pupi-4',
      type: 'PLAQUE',
      zoneKey: PerezPark.key,
      plaqueType: 'MONUMENT',
      loc: [-1174, -29, 2252],
      plaqueInscription: `Atlas' wife, Gloria Branson, planted this tree in 1941 in memory of her fallen husband. The first to respond to the German attack on Paragon City at Independence Port, Atlas died defending the city and the people he loved.`,
      notes: `This plaque is in ${zoneLink(PerezPark)}, 228 yards North of the Everett Lake Marker.`,
      vidiotMapKey: '1',
    },
  ]],
}
