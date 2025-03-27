import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'
import { EchoGalaxyCity } from '../../map/echo-galaxy-city'
import { PerezPark } from '../../map/perez-park'

export const Student: BadgeData = {
  type: 'HISTORY',
  key: 'student',
  setTitle: { id: 148 },
  name: [
    { value: 'Student' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You have learned the history of the Citizen Crime Fighting Act.` },
  ],
  links: [
    { title: 'Student Badge', href: 'https://homecoming.wiki/wiki/Student_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png' },
  ],
  partials: [
    {
      key: 'stud-0',
      type: 'PLAQUE',
      mapKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [-1086, -17, -198],
      inscription: `In 1937, this park was host to many a candlelight vigil in support of Maiden Justice, who was facing down a civil suit brought by some thugs she had apprehended, who claimed her actions were illegal. Citizens from around the city would gather here in support of the proposed Citizen Crime Fighting Act. The candles symbolized the heroes of the city, those bright lights who beat away the darkness.`,
      notes: `This plaque is in ${mapLink(AtlasPark)}, 107 yards south of the Hyperion Way marker.`,
      vidiotMapKey: '2',
    },
    {
      key: 'stud-1',
      type: 'PLAQUE',
      mapKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [1200, 4, 384],
      inscription: `On January 6th, 1937, Maiden Justice of the Freedom Phalanx arrested a group of violent thugs at this location. Although Maiden Justice was able to prevent the thugs from torching the building, the perpetrators were released by policed on the grounds that the arrest had not been legally sanctioned. The public outcry was immediate. Politicians put their heads together and the Citizen Crime Fighting Act was born.`,
      notes: `This plaque is in ${mapLink(AtlasPark)}, 179 yards northeast of the Downside marker.`,
      vidiotMapKey: '3',
    },
    {
      key: 'stud-2',
      type: 'PLAQUE',
      mapKey: EchoGalaxyCity.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-1785, 8, 498],
      inscription: `In June 1937, City Councilman Kyle Legretsky held a press conference here to pledge his support for Maiden Justice and the Citizen Crime Fighting Act. He said, 'The heroes of this town are not the enemies of the people. They are our friends, our fathers, and our wives. They have earned our trust time and time again; it is only fitting that this trust be echoed in our laws.'`,
      notes: `This plaque is in ${mapLink(EchoGalaxyCity)}, 80 yards east of the Gemini Park neighborhood marker.`,
      vidiotMapKey: '2',
    },
    {
      key: 'stud-3',
      type: 'PLAQUE',
      mapKey: PerezPark.key,
      plaqueType: 'MONUMENT',
      loc: [-2631, 5, 380],
      inscription: `On this spot, the first legally sanctioned hero arrest took place, on Sept. 12, 1937. Just two days after the passage of the Citizen Crime Fighting Act, the Freedom Phalanx's Dark Watcher apprehended a cult of demon worshippers in this glade, preventing the sacrifice of an innocent citizen.`,
      notes: `This plaque is in ${mapLink(PerezPark)}, 353 yards north-northwest of the Atlas Park entrance.`,
      vidiotMapKey: '2',
    },
    {
      key: 'stud-4',
      type: 'PLAQUE',
      mapKey: PerezPark.key,
      plaqueType: 'MONUMENT',
      loc: [-1523, 4, 3958],
      inscription: `On the southern shore of Everett Lake, supporters of the Citizen Crime Fighting Act gathered to celebrate its passage in September 1937. Maiden Justice thanked the people for their support, saying, 'The Freedom Phalanx has always known that it was our responsibility to protect htis city from evil-doers. but it is also something else: it is also a privilege.'`,
      notes: `This plaque is in ${mapLink(PerezPark)}, 112 yards northwest of the Skyway City entrance.`,
      vidiotMapKey: '3',
    },
  ],
}
