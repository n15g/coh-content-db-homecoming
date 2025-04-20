import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'
import { PerezPark } from '../../zone/perez-park'

export const Student: BadgeData = {
  type: 'history',
  key: 'student',
  setTitleId: [148],
  name: 'Student',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `You have learned the history of the Citizen Crime Fighting Act.`,
  links: [
    { title: 'Student Badge', href: 'https://homecoming.wiki/wiki/Student_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'stud-0',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [-1086, -17, -198], icon: 'pedestal', iconText: '2' },
      monumentText: `In 1937, this park was host to many a candlelight vigil in support of Maiden Justice, who was facing down a civil suit brought by some thugs she had apprehended, who claimed her actions were illegal.
Citizens from around the city would gather here in support of the proposed Citizen Crime Fighting Act.
The candles symbolized the heroes of the city, those bright lights who beat away the darkness.`,
      notes: `Located 107 yards south of the Hyperion Way marker.`,
    },
    {
      key: 'stud-1',
      type: 'monument',
      location: { zoneKey: AtlasPark.key, coords: [1200, 4, 384], icon: 'pedestal', iconText: '3' },
      monumentText: `On January 6th, 1937, Maiden Justice of the Freedom Phalanx arrested a group of violent thugs at this location.
Although Maiden Justice was able to prevent the thugs from torching the building, the perpetrators were released by policed on the grounds that the arrest had not been legally sanctioned.
The public outcry was immediate. Politicians put their heads together and the Citizen Crime Fighting Act was born.`,
      notes: `Located 179 yards northeast of the Downside marker.`,
    },
    {
      key: 'stud-2',
      type: 'monument',
      location: { zoneKey: EchoGalaxyCity.key, coords: [-1785, 8, 498], icon: 'plaque', iconText: '2' },
      monumentText: `In June 1937, City Councilman Kyle Legretsky held a press conference here to pledge his support for Maiden Justice and the Citizen Crime Fighting Act.
He said, 'The heroes of this town are not the enemies of the people.
They are our friends, our fathers, and our wives. They have earned our trust time and time again; it is only fitting that this trust be echoed in our laws.'`,
      notes: `Located 80 yards east of the Gemini Park neighborhood marker.`,
    },
    {
      key: 'stud-3',
      type: 'monument',
      location: { zoneKey: PerezPark.key, coords: [-2631, 5, 380], icon: 'pedestal', iconText: '2' },
      monumentText: `On this spot, the first legally sanctioned hero arrest took place, on Sept. 12, 1937.
Just two days after the passage of the Citizen Crime Fighting Act, the Freedom Phalanx's Dark Watcher apprehended a cult of demon worshippers in this glade, preventing the sacrifice of an innocent citizen.`,
      notes: `Located 353 yards north-northwest of the Atlas Park entrance.`,
    },
    {
      key: 'stud-4',
      type: 'monument',
      location: { zoneKey: PerezPark.key, coords: [-1523, 4, 3958], icon: 'pedestal', iconText: '3' },
      monumentText: `On the southern shore of Everett Lake, supporters of the Citizen Crime Fighting Act gathered to celebrate its passage in September 1937.
Maiden Justice thanked the people for their support, saying, 'The Freedom Phalanx has always known that it was our responsibility to protect htis city from evil-doers.
but it is also something else: it is also a privilege.'`,
      notes: `Located 112 yards northwest of the Skyway City entrance.`,
    },
  ],
}
