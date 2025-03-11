import { BadgeData } from 'coh-content-db'

export const ReceivedTheStalwartMedallion: BadgeData = {
  type: 'ACCOLADE',
  key: 'received-the-stalwart-medallion',
  setTitle: { id: 178 },
  name: [
    { alignment: 'H', value: 'Received the Stalwart Medallion' },
    { alignment: 'V', value: 'Lost the Stalwart Medallion' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `Your battle in the reactor of Terra Volta altered your powers in a permanent way.` },
  ],
  acquisition: `Complete the first Terra Volta Respecification Trial`,
  notes: `The first (level 24-33) Terra Volta Respecification Trial is available from Jane Hallaway in Independence Port.`,
  links: [
    { title: 'Received the Stalwart Medallion Badge', href: 'https://homecoming.wiki/wiki/Received_the_Stalwart_Medallion_Badge' },
    { title: 'Lost the Stalwart Medallion Badge', href: 'https://homecoming.wiki/wiki/Lost_the_Stalwart_Medallion_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-stalwart-medallion.png' },
  ],
}
