import { BadgeData, contactLink } from 'coh-content-db'
import { MsLiberty } from '../../contact/ms-liberty'

export const Peerless: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'peerless',
  setTitle: { id: 734 },
  name: [
    { alignment: 'H', value: 'Peerless' },
    { alignment: 'V', value: `Recluse's Rival` },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have taken down Lord Recluse himself, something few others have been able to accomplish. One only hopes there is a prison strong enough to contain him.' },
    { alignment: 'V', value: 'Lord Recluse has commented that he had underestimated you as a hero, and will not do the same as a villain.' },
  ],
  acquisition: `Defeat Lord Recluse within the ${contactLink(MsLiberty)} Task Force.`,
  links: [
    { title: 'Peerless Badge', href: 'https://homecoming.wiki/wiki/Peerless_Badge' },
    { title: `Recluse's Rival Badge`, href: 'https://homecoming.wiki/wiki/Recluse%27s_Rival_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png',
}
