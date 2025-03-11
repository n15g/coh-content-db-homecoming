import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { EchoGalaxyCity } from '../../map/echo-galaxy-city'
import { KingsRow } from '../../map/kings-row'
import { PerezPark } from '../../map/perez-park'

export const Intellectual: BadgeData = {
  type: 'HISTORY',
  key: 'intellectual',
  setTitle: { id: 150 },
  name: [
    { value: 'Intellectual' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the Lost's attempt to control the minds of Paragon City's people.` },
  ],
  links: [
    { title: 'Intellectual Badge', href: 'https://homecoming.wiki/wiki/Intellectual_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  partials: [
    {
      key: 'inte-0',
      type: 'PLAQUE',
      mapKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [2380.5, 4.1, -1254],
      inscription: `The warehouse you see before you was instrumental in the Lost's plan to psychically dominate the city. After the Grimm Fairy apprehended the group's ringleader, Ishmael, she discovered that the Lost had kept many citizens imprisoned here for months in order to practice their mental techniques on live subjects. Horrified, the Grimm Fairy appealed for help to the Freedom Phalanx, and Positron dispatched a Task Force to rescue the imprisoned civilians.`,
      notes: `This plaque is in [map:${AtlasPark.key}], 72 yards north and slightly west of the Argosy Industrial neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-1',
      type: 'PLAQUE',
      mapKey: EchoGalaxyCity.key,
      plaqueType: 'MONUMENT',
      loc: [-520, 5, -493],
      inscription: `After the arrest of Ishmael, the Lost Pariah who tried to psychically control the city, heroes traced a large portion of his operation to this warehouse. Here they found a map of the city with several critical pieces of infrastructure marked. It seems that if Ishmael's attempt was successful, his mind-controlled minions would have been sent to tear apart their own city.`,
      notes: `This plaque is in [map:${EchoGalaxyCity.key}], 348 yards south of the Equinox neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-2',
      type: 'PLAQUE',
      mapKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-57, -37, -1086],
      inscription: `On this spot, a Lost Pariah named Ishmael was apprehended by a young heroine known as The Grimm Fairy. She had sensed Ishmael's attempts to enslave the minds of Paragon City's residents. Only by opening her mind ever so slightly to his control was she able to sense his location and thwart him at last.`,
      notes: `This plaque is in [map:${KingsRow.key}], 602 yards northeast of the door to Independence Port, 333 yards northwest of The Gish marker, and 771 yards south of the Galaxy City entrance.`,
      vidiotMapKey: '3',
    },
    {
      key: 'inte-3',
      type: 'PLAQUE',
      mapKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-1363, -37, 688],
      inscription: `For months, unbeknownst to the city's finest Super Groups, a Lost Pariah called Ishmael attempted to psychically control the entire city. It was here that his efforts had the greatest effect, causing many citizens to run about in a stupor for hours on end.`,
      notes: `This plaque is in [map:${KingsRow.key}], 83 yards west of the train line, next to a bunker entrance.`,
      vidiotMapKey: '4',
    },
    {
      key: 'inte-4',
      type: 'PLAQUE',
      mapKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [628, -37, 966],
      inscription: `This tenement used to be the home of a man named Isaac Waters, before he became a member of the mysterious Lost. Calling himself Ishmael, he rose to a position of distinction within the Lost, and spearheaded one of their boldest campaigns yet�an attempt to enslave the minds of the city's populace.`,
      notes: `This plaque is in [map:${KingsRow.key}], 269 yards northeast of the King Garment Works neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-5',
      type: 'PLAQUE',
      mapKey: PerezPark.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [224, 8, 1614],
      inscription: `After the arrest of Ishmael, the Lost Pariah who tried to psychically dominate the city, Sister Psyche scanned the city for traces of psychic residue. The streets of Perez Park were determined to be a hotbed of such residue. Sister Psyche theorizes that this residue is fueling the territorial gang war that continues to plague these streets.`,
      notes: `This plaque is in [map:${PerezPark.key}], 67 yards northeast of the old Galaxy City entrance or 288 yards south and a little west of the Boneyard neighborhood marker.`,
      vidiotMapKey: '5',
    },
  ],
}
