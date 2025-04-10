import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { KingsRow } from '../../zone/kings-row'
import { PerezPark } from '../../zone/perez-park'
import { IndependencePort } from '../../zone/independence-port'

export const Intellectual: BadgeData = {
  type: 'history',
  key: 'intellectual',
  setTitleId: [150],
  name: 'Intellectual',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the Lost's attempt to control the minds of Paragon City's people.`,
  links: [
    { title: 'Intellectual Badge', href: 'https://homecoming.wiki/wiki/Intellectual_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'inte-0',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [2380.5, 4.1, -1254], icon: 'pedestal', iconText: '5' },
      monumentText: `The warehouse you see before you was instrumental in the Lost's plan to psychically dominate the city.
After the Grimm Fairy apprehended the group's ringleader, Ishmael, she discovered that the Lost had kept many citizens imprisoned here for months in order to practice their mental techniques on live subjects.
Horrified, the Grimm Fairy appealed for help to the Freedom Phalanx, and Positron dispatched a Task Force to rescue the imprisoned civilians.`,
      notes: `Located 72 yards north and slightly west of the Argosy Industrial neighborhood marker.`,
    },
    {
      key: 'inte-1',
      type: 'monument',
      location: { zoneKey: EchoGalaxyCity.key, coords: [-520, 5, -493], icon: 'pedestal', iconText: '5' },
      monumentText: `After the arrest of Ishmael, the Lost Pariah who tried to psychically control the city, heroes traced a large portion of his operation to this warehouse.
Here they found a map of the city with several critical pieces of infrastructure marked.
It seems that if Ishmael's attempt was successful, his mind-controlled minions would have been sent to tear apart their own city.`,
      notes: `Located 348 yards south of the Equinox neighborhood marker.`,
    },
    {
      key: 'inte-2',
      type: 'monument',
      location: { zoneKey: KingsRow.key, coords: [-57, -37, -1086], icon: 'pedestal', iconText: '3' },
      monumentText: `On this spot, a Lost Pariah named Ishmael was apprehended by a young heroine known as The Grimm Fairy.
She had sensed Ishmael's attempts to enslave the minds of Paragon City's residents.
Only by opening her mind ever so slightly to his control was she able to sense his location and thwart him at last.`,
      notes: `Located 602 yards northeast of the door to ${zoneLink(IndependencePort)}, 333 yards northwest of The Gish marker.`,
    },
    {
      key: 'inte-3',
      type: 'monument',
      location: { zoneKey: KingsRow.key, coords: [-1363, -37, 688], icon: 'pedestal', iconText: '4' },
      monumentText: `For months, unbeknownst to the city's finest Super Groups, a Lost Pariah called Ishmael attempted to psychically control the entire city.
It was here that his efforts had the greatest effect, causing many citizens to run about in a stupor for hours on end.`,
      notes: `Located 83 yards west of the train line, next to a bunker entrance.`,
    },
    {
      key: 'inte-4',
      type: 'monument',
      location: { zoneKey: KingsRow.key, coords: [628, -37, 966], icon: 'pedestal', iconText: '5' },
      monumentText: `This tenement used to be the home of a man named Isaac Waters, before he became a member of the mysterious Lost.
Calling himself Ishmael, he rose to a position of distinction within the Lost, and spearheaded one of their boldest campaigns yet�an attempt to enslave the minds of the city's populace.`,
      notes: `Located 269 yards northeast of the King Garment Works neighborhood marker.`,
    },
    {
      key: 'inte-5',
      type: 'monument',
      location: { zoneKey: PerezPark.key, coords: [224, 8, 1614], icon: 'plaque', iconText: '5' },
      monumentText: `After the arrest of Ishmael, the Lost Pariah who tried to psychically dominate the city, Sister Psyche scanned the city for traces of psychic residue.
The streets of Perez Park were determined to be a hotbed of such residue. Sister Psyche theorizes that this residue is fueling the territorial gang war that continues to plague these streets.`,
      notes: `Located 67 yards northeast of the old Galaxy City entrance or 288 yards south and a little west of the Boneyard neighborhood marker.`,
    },
  ],
}
