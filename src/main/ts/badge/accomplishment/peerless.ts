import { BadgeData, missionLink } from 'coh-content-db'
import { MsLibertyTaskForce } from '../../mission/ms-liberty-task-force'

export const Peerless: BadgeData = {
  type: 'accomplishment',
  key: 'peerless',
  setTitleId: [734],
  name: [
    { alignment: 'hero', value: 'Peerless' },
    { alignment: 'villain', value: `Recluse's Rival` },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have taken down Lord Recluse himself, something few others have been able to accomplish. One only hopes there is a prison strong enough to contain him.' },
    { alignment: 'villain', value: 'Lord Recluse has commented that he had underestimated you as a hero, and will not do the same as a villain.' },
  ],
  acquisition: `Defeat Lord Recluse within the ${missionLink(MsLibertyTaskForce)}.`,
  links: [
    { title: 'Peerless Badge', href: 'https://homecoming.wiki/wiki/Peerless_Badge' },
    { title: `Recluse's Rival Badge`, href: 'https://homecoming.wiki/wiki/Recluse%27s_Rival_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png',
}
