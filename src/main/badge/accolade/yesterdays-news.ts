import { BadgeData } from 'coh-content-db'
import { CouchPotato } from '../accomplishment/couch-potato'
import { Electrician } from '../defeat/electrician'
import { StrikeBuster } from '../defeat/strike-buster'
import { Surging } from '../defeat/surging'
import { Paroled } from '../exploration/paroled'
import { Lobbyist } from '../exploration/lobbyist'
import { MasterOfTheAirwaves } from '../exploration/master-of-the-airwaves'

export const YesterdaysNews: BadgeData = {
  type: 'ACCOLADE',
  key: 'yesterdays-news',
  setTitle: { id: 533 },
  name: [
    { alignment: 'H', value: 'Yesterday\'s News' },
    { alignment: 'V', value: 'Headline Stealer' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `While rampaging in the Rogue Isles, you acquired an Immobilizer Ray. Unfortunately, it seems to require something only present there to recharge.` },
    { alignment: 'V', value: `In your crime spree you have acquired an Immobilizer Ray. You're not sure where it came from, but it sure is useful stopping foes in their tracks.` },
  ],
  effect: `Awards the Stolen Immobilizer Ray power.`,
  links: [
    { title: 'Yesterday\'s News Badge', href: 'https://homecoming.wiki/wiki/Yesterday%27s_News_Badge' },
    { title: 'Headline Stealer Badge', href: 'https://homecoming.wiki/wiki/Headline_Stealer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/yesterdays-news.png' },
  ],
  requirements: [
    { key: CouchPotato.key, type: 'BADGE', badgeKey: CouchPotato.key },
    { key: Paroled.key, type: 'BADGE', badgeKey: Paroled.key },
    { key: Lobbyist.key, type: 'BADGE', badgeKey: Lobbyist.key },
    { key: Electrician.key, type: 'BADGE', badgeKey: Electrician.key },
    { key: MasterOfTheAirwaves.key, type: 'BADGE', badgeKey: MasterOfTheAirwaves.key },
    { key: StrikeBuster.key, type: 'BADGE', badgeKey: StrikeBuster.key },
    { key: Surging.key, type: 'BADGE', badgeKey: Surging.key },
  ],
}
