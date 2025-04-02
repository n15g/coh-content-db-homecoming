import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { TheHollows } from '../../zone/the-hollows'

export const Digger: BadgeData = {
  type: 'HISTORY',
  key: 'digger',
  setTitle: { id: 190 },
  name: [
    { value: 'Digger' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history behind the Hollowing.` },
  ],
  links: [
    { title: 'Digger Badge', href: 'https://homecoming.wiki/wiki/Digger_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  requirements: [
    {
      key: 'digg-0',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [1155.3, 46.1, -812.1],
      plaqueInscription: `On this site, the Trolls Task Force was formed in response to the devastating event known as the Hollowing. Police Chief James Wilson said 'The police department will not stop until the residents of Eastgate can go home again.'`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, 7 feet north of the Prometheus Park neighborhood marker, on the overpass overlooking a lake. It is also 112 feet west and slightly north of the Fort Trident marker.`,
      vidiotMapKey: '6',
    },
    {
      key: 'digg-1',
      type: 'PLAQUE',
      zoneKey: TheHollows.key,
      plaqueType: 'MONUMENT',
      loc: [1351, 11, -3065],
      plaqueInscription: `This water treatment facility used to desalinate the water from Eastgate Bay for use by Paragon City citizens. In the wake of the Hollowing, the facility became unusable, creating a serious water crisis for post-war Paragon City.`,
      notes: `This plaque is in ${zoneLink(TheHollows)}, 196 yards south of the Cherry Hills neighborhood marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'digg-2',
      type: 'PLAQUE',
      zoneKey: TheHollows.key,
      plaqueType: 'MONUMENT',
      loc: [-2250, 5, -2365],
      plaqueInscription: `This building once housed the lab of Dr. Calvin Stewart, who pioneered Eastgate Bay's Seaview project. Since the Hollowing, Dr. Stewart has been forced to abandon the lab, and communication with the Seaview project has been erratic. Very little is known by the public about the scientists' activities in Eastgate Bay.`,
      notes: `This plaque is in ${zoneLink(TheHollows)}, 740 yards southeast of the Four Seasons neighborhood marker.`,
      vidiotMapKey: '2',
    },
    {
      key: 'digg-3',
      type: 'PLAQUE',
      zoneKey: TheHollows.key,
      plaqueType: 'MONUMENT',
      loc: [1612, 4, -1949],
      plaqueInscription: `During the Hollowing, many buildings in this area collapsed. If not for the rapid response of several heroes, led by the valiant Luminary, many of Eastgate's residents would have been buried under the rubble. Luminary and her companions managed to save 437 lives on that devastating day, guaranteeing them a place in Paragon City's history.`,
      notes: `This plaque is in ${zoneLink(TheHollows)}, 571 yards south of the Cherry Hills neighborhood marker.`,
      vidiotMapKey: '3',
    },
    {
      key: 'digg-4',
      type: 'PLAQUE',
      zoneKey: TheHollows.key,
      plaqueType: 'MONUMENT',
      loc: [872, 68, 3344],
      plaqueInscription: `Before the Hollowing this spot, known as Lookout Point, was a favorite destination for lovers on a midnight stroll. Now, it is a vantage point from which heroes keep their eyes on the mystical antics of the Circle of Thorns.`,
      notes: `This plaque is in ${zoneLink(TheHollows)}, 571 yards east and slightly south of the Skyway City Entrance marker and 714 yards due south of the Red River Marker.`,
      vidiotMapKey: '4',
    },
  ],
}
