import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { KingsRow } from '../../zone/kings-row'
import { PerezPark } from '../../zone/perez-park'

export const Intellectual: BadgeData = {
  type: 'history',
  key: 'intellectual',
  setTitleId: [150],
  name: 'Intellectual',
  morality: 'heroic',
  badgeText: `You have learned the history of the Lost's attempt to control the minds of Paragon City's people.`,
  links: [
    { title: 'Intellectual Badge', href: 'https://homecoming.wiki/wiki/Intellectual_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'inte-0',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [2380.5, 4.1, -1254],
      plaqueInscription: `The warehouse you see before you was instrumental in the Lost's plan to psychically dominate the city. After the Grimm Fairy apprehended the group's ringleader, Ishmael, she discovered that the Lost had kept many citizens imprisoned here for months in order to practice their mental techniques on live subjects. Horrified, the Grimm Fairy appealed for help to the Freedom Phalanx, and Positron dispatched a Task Force to rescue the imprisoned civilians.`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, 72 yards north and slightly west of the Argosy Industrial neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-1',
      type: 'PLAQUE',
      zoneKey: EchoGalaxyCity.key,
      plaqueType: 'MONUMENT',
      loc: [-520, 5, -493],
      plaqueInscription: `After the arrest of Ishmael, the Lost Pariah who tried to psychically control the city, heroes traced a large portion of his operation to this warehouse. Here they found a map of the city with several critical pieces of infrastructure marked. It seems that if Ishmael's attempt was successful, his mind-controlled minions would have been sent to tear apart their own city.`,
      notes: `This plaque is in ${zoneLink(EchoGalaxyCity)}, 348 yards south of the Equinox neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-2',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-57, -37, -1086],
      plaqueInscription: `On this spot, a Lost Pariah named Ishmael was apprehended by a young heroine known as The Grimm Fairy. She had sensed Ishmael's attempts to enslave the minds of Paragon City's residents. Only by opening her mind ever so slightly to his control was she able to sense his location and thwart him at last.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, 602 yards northeast of the door to Independence Port, 333 yards northwest of The Gish marker, and 771 yards south of the Galaxy City entrance.`,
      vidiotMapKey: '3',
    },
    {
      key: 'inte-3',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-1363, -37, 688],
      plaqueInscription: `For months, unbeknownst to the city's finest Super Groups, a Lost Pariah called Ishmael attempted to psychically control the entire city. It was here that his efforts had the greatest effect, causing many citizens to run about in a stupor for hours on end.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, 83 yards west of the train line, next to a bunker entrance.`,
      vidiotMapKey: '4',
    },
    {
      key: 'inte-4',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [628, -37, 966],
      plaqueInscription: `This tenement used to be the home of a man named Isaac Waters, before he became a member of the mysterious Lost. Calling himself Ishmael, he rose to a position of distinction within the Lost, and spearheaded one of their boldest campaigns yet�an attempt to enslave the minds of the city's populace.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, 269 yards northeast of the King Garment Works neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'inte-5',
      type: 'PLAQUE',
      zoneKey: PerezPark.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [224, 8, 1614],
      plaqueInscription: `After the arrest of Ishmael, the Lost Pariah who tried to psychically dominate the city, Sister Psyche scanned the city for traces of psychic residue. The streets of Perez Park were determined to be a hotbed of such residue. Sister Psyche theorizes that this residue is fueling the territorial gang war that continues to plague these streets.`,
      notes: `This plaque is in ${zoneLink(PerezPark)}, 67 yards northeast of the old Galaxy City entrance or 288 yards south and a little west of the Boneyard neighborhood marker.`,
      vidiotMapKey: '5',
    },
  ],
}
