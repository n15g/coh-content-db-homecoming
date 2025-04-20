import { BadgeData } from 'coh-content-db'
import { BustUpTheDockworkersStrike } from '../../mission/bust-up-the-dockworkers-strike'

export const Strikebreaker: BadgeData = {
  type: 'accomplishment',
  key: 'strikebreaker',
  setTitleId: [336],
  name: 'Strikebreaker',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'The Scrapyarders of Sharkhead Isle have been put back to work thanks to you.',
  links: [
    { title: 'Strikebreaker Badge', href: 'https://homecoming.wiki/wiki/Strikebreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-4.png',
  requirements: [
    { key: BustUpTheDockworkersStrike.key, type: 'mission', missionKey: BustUpTheDockworkersStrike.key },
  ],
}
