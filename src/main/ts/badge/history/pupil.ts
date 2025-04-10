import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { KingsRow } from '../../zone/kings-row'
import { PerezPark } from '../../zone/perez-park'

export const Pupil: BadgeData = {
  type: 'history',
  key: 'pupil',
  setTitleId: [174],
  name: 'Pupil',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the fallen hero, Atlas.`,
  links: [
    { title: 'Pupil Badge', href: 'https://homecoming.wiki/wiki/Pupil_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'pupi-0',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [495.2, 4.3, -1132.9], icon: 'pedestal', iconText: '1' },
      monumentText: `On this spot the titanic hero Atlas was posthumously awarded a key to the city for his many valiant efforts on behalf of its citizens.`,
      notes: `Located in the northwest corner of Atlas Plaza and just south of the Paragon City Monorail.`,
    },
    {
      key: 'pupi-1',
      type: 'monument',
      location: { zoneKey: EchoGalaxyCity.key, coords: [-752, 5, -1550], icon: 'pedestal', iconText: '1' },
      monumentText: `On this street in 1939, a parade was held to honor the hero Atlas.
Though Atlas' nemesis, the Teal Serpent, tried to interrupt the festivities with a poison gas bomb, Atlas saved the spectators by scooping them up to sit on his mighty shoulders, far above the fumes.
After getting the citizens to safety, Atlas sought out the Teal Serpent and defeated him. It is unknown whether the Serpent survived.`,
      notes: `Located 132 yards due north of the Arena, almost right on top of the Equinox neighborhood marker.`,
    },
    {
      key: 'pupi-2',
      type: 'monument',
      location: { zoneKey: KingsRow.key, coords: [-170, -42, -1467], icon: 'plaque', iconText: '1' },
      monumentText: `On July 12, 1932, this apartment building caught fire. Although fire fighters evacuated the residents, they were unable to contain the blaze.
If not for the mighty hero Atlas, the entire neighborhood might have been lost. He arrived in time to clap out the flames with his massive hands.`,
      notes: `Located 412 yards southeast of the High Park marker.`,
    },
    {
      key: 'pupi-3',
      type: 'monument',
      location: { zoneKey: KingsRow.key, coords: [-400, 4, 1760], icon: 'pedestal', iconText: '2' },
      monumentText: `The building that used to stand in this spot was destroyed by the archvillain known only as the Teal Serpent. While Statesman battled the Serpent in an epic battle that raged for miles, the monumental Atlas turned his attention to the people trapped inside the rubble. With a gentleness to rival his strength, he picked apart the ruins with his massive fingers, freeing 243 people who would otherwise have perished.`,
      notes: `Located 188 yards southwest of Blue Steel.`,
    },
    {
      key: 'pupi-4',
      type: 'monument',
      location: { zoneKey: PerezPark.key, coords: [-1174, -29, 2252], icon: 'pedestal', iconText: '1' },
      monumentText: `Atlas' wife, Gloria Branson, planted this tree in 1941 in memory of her fallen husband.
The first to respond to the German attack on Paragon City at Independence Port, Atlas died defending the city and the people he loved.`,
      notes: `Located 228 yards north of the Everett Lake marker.`,
    },
  ],
}
