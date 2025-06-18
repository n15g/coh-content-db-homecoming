import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const PatronOfTheArts: BadgeData = {
  type: 'history',
  key: 'patron-of-the-arts',
  setTitleId: [2556],
  name: 'Patron of the Arts',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `You are considered a Patron of the Arts for showing a vested interest in Theatre Row and its struggles through the past and present century.`,
  links: [
    { title: 'Patron of the Arts Badge', href: 'https://homecoming.wiki/wiki/Patron_of_the_Arts_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'patr-0',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [1997.9, 47.5, 423], icon: 'plaque', iconText: '20' },
      monumentText: `Theatre Row was a place of fashion and culture for decades. It truly rose to fame in the 1910s and 1920s when Kallisti Wharf was booming with trade, shipping, and immigration.
It was renowned for its unique street food, art festivals, and numerous theaters, quickly developing into a major tourist trap.
By the late 1930s the Paragon Showcase sprang up, a rival film festival to the nascent Cannes and Venice Film Festivals.`,
    },
    {
      key: 'patr-1',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [1308.5, 18.4, 923], icon: 'plaque', iconText: '19' },
      monumentText: `In the aftermath of Mark Maxwell's corruption case, Emil Christie sought to bring back some positivity and good will to the area.
The site was sold to David 'Odysseus' Hill and his foundation as a philanthropic endeavor to build the area up as a nod to the Greek immigrants that settled it.
The plans are to have a multi-faceted entertainment complex in the form of a traditional colosseum, which can also be converted within hours to be a forum for live outdoor theater.
This about-face for the area won Emil Christie his re-election handily.`,
    },
    {
      key: 'patr-2',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [1837.5, 42, 1208.9], icon: 'pedestal', iconText: '18' },
      monumentText: `In the early 2000s, there was a movement to revitalize the area, but the Rikti War put an end to that when Flagtown and much of the Wharf were devastated, plunging the area into a depression.
Some years later, several of the theaters were bought by land tycoon Mark Maxwell after a tense set of townhall forums.`,
    },
    {
      key: 'patr-3',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [1954.8, 48.5, 1685.5], icon: 'plaque', iconText: '17' },
      monumentText: `In the early 1950s, a string of corruption and tax fraud charges at the Showcase sent it spiraling into bankruptcy, tarnishing the reputation of the area.
The Row began its long decline, and the street for which it was named fell fully into disrepair during the 1970s. Most of the theatres were abandoned and condemned, a haven for squatters and the criminals who preyed upon them.`,
    },
  ],
}
