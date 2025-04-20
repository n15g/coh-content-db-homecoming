import { BadgeData } from 'coh-content-db'
import { CouchPotato } from '../accomplishment/couch-potato'
import { Electrician } from '../defeat/electrician'
import { StrikeBuster } from '../defeat/strike-buster'
import { Surging } from '../defeat/surging'
import { Paroled } from '../exploration/paroled'
import { Lobbyist } from '../exploration/lobbyist'
import { MasterOfTheAirwaves } from '../exploration/master-of-the-airwaves'

export const YesterdaysNews: BadgeData = {
  type: 'accolade',
  key: 'yesterdays-news',
  setTitleId: [533],
  name: [
    { alignment: 'hero', value: `Yesterday's News` },
    { alignment: 'villain', value: 'Headline Stealer' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `While rampaging in the Rogue Isles, you acquired an Immobilizer Ray. Unfortunately, it seems to require something only present there to recharge.` },
    { alignment: 'villain', value: `In your crime spree you have acquired an Immobilizer Ray. You're not sure where it came from, but it sure is useful stopping foes in their tracks.` },
  ],
  effect: `Awards the Stolen Immobilizer Ray power.`,
  links: [
    { title: `Yesterday's News Badge`, href: 'https://homecoming.wiki/wiki/Yesterday%27s_News_Badge' },
    { title: 'Headline Stealer Badge', href: 'https://homecoming.wiki/wiki/Headline_Stealer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/yesterdays-news.png',
  requirements: [
    { key: CouchPotato.key, type: 'badge', badgeKey: CouchPotato.key },
    { key: Paroled.key, type: 'badge', badgeKey: Paroled.key },
    { key: Lobbyist.key, type: 'badge', badgeKey: Lobbyist.key },
    { key: Electrician.key, type: 'badge', badgeKey: Electrician.key },
    { key: MasterOfTheAirwaves.key, type: 'badge', badgeKey: MasterOfTheAirwaves.key },
    { key: StrikeBuster.key, type: 'badge', badgeKey: StrikeBuster.key },
    { key: Surging.key, type: 'badge', badgeKey: Surging.key },
  ],
}
