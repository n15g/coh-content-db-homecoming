import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'
import { PrimeTimeSublime } from '../../mission/prime-time-sublime'

export const WingClipper: BadgeData = {
  type: 'exploration',
  key: 'wing-clipper',
  gameId: 'MayhemMap10',
  setTitleId: [2602],
  name: 'Wing Clipper',
  releaseDate: '2026-10-06',
  morality: 'villainous',
  badgeText: `You recall the time you tore through Kallisti Wharf and remember how driven by violence you once used to be.`,
  acquisition: `Explore Kallisti Wharf during the mayhem mission in the ${missionLink(PrimeTimeSublime)} story arc.`,
  links: [
    { title: 'Wing Clipper Badge', href: 'https://homecoming.wiki/wiki/Wing_Clipper_Badge' },
    { title: PrimeTimeSublime.name, href: missionUri(PrimeTimeSublime) },
    { title: 'Issue 28, Page 4 Patch Notes — Badge Additions', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [5702, 121, 4697], icon: 'badge', iconText: '1' } },
  ],
}
