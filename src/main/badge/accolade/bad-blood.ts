import { BadgeData } from 'coh-content-db'
import { Lobbyist } from '../exploration/lobbyist'
import { Hungry } from '../exploration/hungry'
import { Imploding } from '../exploration/imploding'
import { Ghoulish } from '../exploration/ghoulish'
import { WhatLurksBeyond } from '../exploration/what-lurks-beyond'
import { Restless } from '../exploration/restless'
import { MostlyHarmless } from '../exploration/mostly-harmless'
import { Burgermeister } from '../exploration/burgermeister'

export const BadBlood: BadgeData = {
  type: 'ACCOLADE',
  key: 'bad-blood',
  setTitle: { id: 2409 },
  name: [
    { value: 'Bad Blood' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png' }],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Bloody Bay.` },
  ],
  links: [
    { title: 'Bad Blood Badge', href: 'https://homecoming.wiki/wiki/Bad_Blood_Badge' },
  ],
  requirements: [[
    { key: Lobbyist.key, type: 'BADGE', badgeKey: Lobbyist.key },
    { key: Hungry.key, type: 'BADGE', badgeKey: Hungry.key },
    { key: Imploding.key, type: 'BADGE', badgeKey: Imploding.key },
    { key: Ghoulish.key, type: 'BADGE', badgeKey: Ghoulish.key },
    { key: WhatLurksBeyond.key, type: 'BADGE', badgeKey: WhatLurksBeyond.key },
    { key: Restless.key, type: 'BADGE', badgeKey: Restless.key },
    { key: MostlyHarmless.key, type: 'BADGE', badgeKey: MostlyHarmless.key },
    { key: Burgermeister.key, type: 'BADGE', badgeKey: Burgermeister.key },
  ]],
}
