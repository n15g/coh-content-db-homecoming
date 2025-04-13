import { BadgeData } from 'coh-content-db'
import { Foggy } from '../exploration/foggy'
import { Chaotician } from '../exploration/chaotician'
import { GuardianAngel } from '../exploration/guardian-angel'
import { LosingParadise } from '../exploration/losing-paradise'
import { WatchfulEyes } from '../exploration/watchful-eyes'
import { HamidonsFury } from '../exploration/hamidons-fury'
import { FoundersHero } from '../exploration/founders-hero'
import { Misunderstood } from '../exploration/misunderstood'

export const LostAndFound: BadgeData = {
  type: 'accolade',
  key: 'lost-and-found',
  setTitleId: [1564],
  name: 'Lost and Found',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Founders' Falls.`,
  links: [
    { title: 'Lost and Found Badge', href: 'https://homecoming.wiki/wiki/Lost_and_Found_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Foggy.key, type: 'badge', badgeKey: Foggy.key },
    { key: Chaotician.key, type: 'badge', badgeKey: Chaotician.key },
    { key: GuardianAngel.key, type: 'badge', badgeKey: GuardianAngel.key },
    { key: LosingParadise.key, type: 'badge', badgeKey: LosingParadise.key },
    { key: WatchfulEyes.key, type: 'badge', badgeKey: WatchfulEyes.key },
    { key: HamidonsFury.key, type: 'badge', badgeKey: HamidonsFury.key },
    { key: FoundersHero.key, type: 'badge', badgeKey: FoundersHero.key },
    { key: Misunderstood.key, type: 'badge', badgeKey: Misunderstood.key },
  ],
}
