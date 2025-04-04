import { BadgeData } from 'coh-content-db'
import { Clubber } from '../day-job/clubber'
import { FashionDesigner } from '../day-job/fashion-designer'

export const Socialite: BadgeData = {
  type: 'accolade',
  key: 'socialite',
  setTitleId: [1070],
  name: 'Socialite',
  morality: 'all',
  badgeText: `Your popularity and your fashion sense have earned you the Socialite Accolade. While logged out in Pocket D or a Tailor you will earn charges for your Beguile power.`,
  links: [
    { title: 'Socialite Badge', href: 'https://homecoming.wiki/wiki/Socialite_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/socialite.png',
  requirements: [
    { key: Clubber.key, type: 'badge', badgeKey: Clubber.key },
    { key: FashionDesigner.key, type: 'badge', badgeKey: FashionDesigner.key },
  ],
}
