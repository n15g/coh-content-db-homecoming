import { BadgeData } from 'coh-content-db'
import { Pupil } from '../history/pupil'
import { Spelunker } from '../accomplishment/spelunker'
import { TheSilverBullet } from '../defeat/the-silver-bullet'
import { TheSlayer } from '../defeat/the-slayer'
import { TopDog } from '../exploration/top-dog'

export const ReceivedTheAtlasMedallion: BadgeData = {
  type: 'accolade',
  key: 'received-the-atlas-medallion',
  setTitleId: [160],
  name: [
    { alignment: 'hero', value: 'Received the Atlas Medallion' },
    { alignment: 'villain', value: 'Atlas Shrugged' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `Through the might of Atlas, one of the greatest heroes of Paragon City's history, you have gained +5 to your maximum Endurance total.` },
    { alignment: 'villain', value: `Whatever power the spirit of Atlas once sent your way, it doesn't seem to work for villains.` },
  ],
  effect: `Awards +5 Max Endurance.`,
  links: [
    { title: 'Received the Atlas Medallion Badge', href: 'https://homecoming.wiki/wiki/Received_the_Atlas_Medallion_Badge' },
    { title: 'Atlas Shrugged Badge', href: 'https://homecoming.wiki/wiki/Atlas_Shrugged_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/received-the-atlas-medallion.png',
  requirements: [
    { key: Pupil.key, type: 'badge', badgeKey: Pupil.key },
    { key: Spelunker.key, type: 'badge', badgeKey: Spelunker.key },
    { key: TheSilverBullet.key, type: 'badge', badgeKey: TheSilverBullet.key },
    { key: TheSlayer.key, type: 'badge', badgeKey: TheSlayer.key },
    { key: TopDog.key, type: 'badge', badgeKey: TopDog.key },
  ],
}
