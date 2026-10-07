import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const AbandonedRobotJunk: ContactData = {
  key: 'abandoned-robot-junk',
  name: 'Abandoned Robot Junk',
  title: 'Bizarre talking Robot',
  morality: 'villainous',
  location: { zoneKey: KallistiWharf.key, coords: [554, -245, 5064] },
  levelRange: [40, 50],
  notes: 'Located in the Abandoned Lab in Kallisti Wharf.',
  links: [
    { title: 'Abandoned Robot Junk', href: 'https://homecoming.wiki/wiki/Abandoned_Robot_Junk' },
    { title: 'Issue 28, Page 4 Patch Notes — New Story Arc', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
}
