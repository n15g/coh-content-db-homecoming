import { MissionData } from 'coh-content-db'

export const CitadelTaskForce: MissionData = {
  key: 'citadel-task-force',
  name: 'Citadel Task Force',
  type: 'task-force',
  morality: 'heroic',
  levelRange: [25, 30],
  notes: `Only available via Ouroboros as the classic Citadel Task Force, 'Citadel's Children'.`,
  links: [
    { title: 'Old Citadel Task Force', href: 'https://homecoming.wiki/wiki/Old_Citadel_Task_Force' },
    { title: 'Issue 28, Page 4 Patch Notes — Citadel Task Force', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
  flashback: {
    id: '0.42',
    name: `Citadel's Children`,
  },
}
