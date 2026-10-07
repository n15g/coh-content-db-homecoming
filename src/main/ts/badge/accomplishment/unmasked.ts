import { BadgeData, missionLink } from 'coh-content-db'
import { CitadelTaskForceRevamp } from '../../mission/citadel-task-force-revamp'

export const Unmasked: BadgeData = {
  type: 'accomplishment',
  key: 'unmasked',
  gameId: 'Citadel5thSecret',
  setTitleId: [2607],
  name: 'Unmasked',
  releaseDate: '2026-10-06',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `When assisting Citadel, you exposed Vandal's true allegiance to the 5th Column and his grand scheme to play the Council's resources off of them.` },
    { alignment: 'villain', value: `When assisting Citadel, you exposed Vandal's true allegiance to the 5th Column and his grand scheme to play the Council's resources off of them. Now, how do you suppose you can twist this information to your advantage?` },
  ],
  acquisition: `Complete the alternate ending of the revamped ${missionLink(CitadelTaskForceRevamp)}.`,
  links: [
    { title: 'Unmasked Badge', href: 'https://homecoming.wiki/wiki/Unmasked_Badge' },
    { title: 'Issue 28, Page 4 Patch Notes — Badge Additions', href: 'https://forums.homecomingservers.com/patch-notes/issue-28/page-4/issue-28-page-4-r47/' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/unmasked.png',
  requirements: [
    { key: CitadelTaskForceRevamp.key, type: 'mission', missionKey: CitadelTaskForceRevamp.key, notes: 'Complete the alternate ending.' },
  ],
}
