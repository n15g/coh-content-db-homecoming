import { BadgeData } from 'coh-content-db'
import { Pupil } from '../history/pupil'
import { Spelunker } from '../accomplishment/spelunker'
import { TheSilverBullet } from '../defeat/the-silver-bullet'
import { TheSlayer } from '../defeat/the-slayer'
import { TopDog } from '../exploration/top-dog'

export const ReceivedTheAtlasMedallion: BadgeData = {
  type: 'ACCOLADE',
  key: 'received-the-atlas-medallion',
  setTitle: { id: 160 },
  name: [
    { alignment: 'H', value: 'Received the Atlas Medallion' },
    { alignment: 'V', value: 'Atlas Shrugged' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Through the might of Atlas, one of the greatest heroes of Paragon City's history, you have gained +5 to your maximum Endurance total.` },
    { alignment: 'V', value: `Whatever power the spirit of Atlas once sent your way, it doesn't seem to work for villains.` },
  ],
  effect: `Awards +5 Max Endurance.`,
  links: [
    { title: 'Received the Atlas Medallion Badge', href: 'https://homecoming.wiki/wiki/Received_the_Atlas_Medallion_Badge' },
    { title: 'Atlas Shrugged Badge', href: 'https://homecoming.wiki/wiki/Atlas_Shrugged_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-atlas-medallion.png',
  requirements: [
    { key: Pupil.key, type: 'BADGE', badgeKey: Pupil.key },
    { key: Spelunker.key, type: 'BADGE', badgeKey: Spelunker.key },
    { key: TheSilverBullet.key, type: 'BADGE', badgeKey: TheSilverBullet.key },
    { key: TheSlayer.key, type: 'BADGE', badgeKey: TheSlayer.key },
    { key: TopDog.key, type: 'BADGE', badgeKey: TopDog.key },
  ],
}
