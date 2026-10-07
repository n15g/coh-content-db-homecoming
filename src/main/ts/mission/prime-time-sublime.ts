import { MissionData, contactLink } from 'coh-content-db'
import { AbandonedRobotJunk } from '../contact/abandoned-robot-junk'

export const PrimeTimeSublime: MissionData = {
  key: 'prime-time-sublime',
  name: 'Prime Time Sublime',
  type: 'story-arc',
  morality: 'villain',
  contactKeys: AbandonedRobotJunk.key,
  levelRange: [40, 50],
  notes: `Begin this arc by speaking to ${contactLink(AbandonedRobotJunk)} in the Abandoned Lab in Kallisti Wharf.`,
  links: [
    { title: 'Prime Time Sublime', href: 'https://homecoming.wiki/wiki/Abandoned_Robot_Junk#Prime_Time_Sublime' },
    { title: 'Issue 28, Page 4 Patch Notes — New Story Arc', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
  flashback: {
    id: '28.08',
    levelRange: [50],
  },
}
