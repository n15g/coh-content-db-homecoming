import { MissionData } from 'coh-content-db'

export const PositronTaskForceClassic: MissionData = {
  key: 'positron-task-force-classic',
  name: 'Positron Task Force',
  type: 'task-force',
  morality: 'heroic',
  levelRange: [10, 15],
  notes: `Only available via Ouroboros as the classic Positron Task Force, 'The New Recruits'.`,
  links: [
    { title: 'Old Positron Task Force', href: 'https://homecoming.wiki/wiki/Old_Positron_Task_Force' },
    { title: 'Issue 28, Page 4 Patch Notes — Badge Additions', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
}
