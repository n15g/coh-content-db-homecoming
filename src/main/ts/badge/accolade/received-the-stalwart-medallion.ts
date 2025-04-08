import { BadgeData } from 'coh-content-db'
import { JaneHallaway } from '../../contact/jane-hallaway'

export const ReceivedTheStalwartMedallion: BadgeData = {
  type: 'accolade',
  key: 'received-the-stalwart-medallion',
  setTitleId: [178],
  name: [
    { alignment: 'hero', value: 'Received the Stalwart Medallion' },
    { alignment: 'villain', value: 'Lost the Stalwart Medallion' },
  ],
  morality: 'heroic',
  badgeText: `Your battle in the reactor of Terra Volta altered your powers in a permanent way.`,
  effect: 'Awards a character respecification.',
  links: [
    { title: 'Received the Stalwart Medallion Badge', href: 'https://homecoming.wiki/wiki/Received_the_Stalwart_Medallion_Badge' },
    { title: 'Lost the Stalwart Medallion Badge', href: 'https://homecoming.wiki/wiki/Lost_the_Stalwart_Medallion_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-stalwart-medallion.png',
  requirements: [
    { key: 'first-terra-volta-respecification-trial', type: 'TASK_FORCE', missionName: 'First Terra Volta Respecification Trial', contactKey: JaneHallaway.key },
  ],
}
