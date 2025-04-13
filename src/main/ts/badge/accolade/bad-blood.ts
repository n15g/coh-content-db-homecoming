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
  type: 'accolade',
  key: 'bad-blood',
  setTitleId: [2409],
  name: 'Bad Blood',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Bloody Bay.`,
  links: [
    { title: 'Bad Blood Badge', href: 'https://homecoming.wiki/wiki/Bad_Blood_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/pvp-acc.png',
  requirements: [
    { key: Lobbyist.key, type: 'badge', badgeKey: Lobbyist.key },
    { key: Hungry.key, type: 'badge', badgeKey: Hungry.key },
    { key: Imploding.key, type: 'badge', badgeKey: Imploding.key },
    { key: Ghoulish.key, type: 'badge', badgeKey: Ghoulish.key },
    { key: WhatLurksBeyond.key, type: 'badge', badgeKey: WhatLurksBeyond.key },
    { key: Restless.key, type: 'badge', badgeKey: Restless.key },
    { key: MostlyHarmless.key, type: 'badge', badgeKey: MostlyHarmless.key },
    { key: Burgermeister.key, type: 'badge', badgeKey: Burgermeister.key },
  ],
}
