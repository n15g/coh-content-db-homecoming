import { BadgeData, zoneLink } from 'coh-content-db'
import { FoundersFalls } from '../../zone/founders-falls'
import { Foggy } from '../exploration/foggy'
import { Chaotician } from '../exploration/chaotician'
import { GuardianAngel } from '../exploration/guardian-angel'
import { LosingParadise } from '../exploration/losing-paradise'
import { WatchfulEyes } from '../exploration/watchful-eyes'
import { HamidonsFury } from '../exploration/hamidons-fury'
import { FoundersHero } from '../exploration/founders-hero'
import { Misunderstood } from '../exploration/misunderstood'

export const LostAndFound: BadgeData = {
  type: 'ACCOLADE',
  key: 'lost-and-found',
  setTitle: { id: 1564 },
  name: [
    { value: 'Lost and Found' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Founders' Falls.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(FoundersFalls)}`,
  links: [
    { title: 'Lost and Found Badge', href: 'https://homecoming.wiki/wiki/Lost_and_Found_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [[
    { key: Foggy.key, type: 'BADGE', badgeKey: Foggy.key },
    { key: Chaotician.key, type: 'BADGE', badgeKey: Chaotician.key },
    { key: GuardianAngel.key, type: 'BADGE', badgeKey: GuardianAngel.key },
    { key: LosingParadise.key, type: 'BADGE', badgeKey: LosingParadise.key },
    { key: WatchfulEyes.key, type: 'BADGE', badgeKey: WatchfulEyes.key },
    { key: HamidonsFury.key, type: 'BADGE', badgeKey: HamidonsFury.key },
    { key: FoundersHero.key, type: 'BADGE', badgeKey: FoundersHero.key },
    { key: Misunderstood.key, type: 'BADGE', badgeKey: Misunderstood.key },
  ]],
}
