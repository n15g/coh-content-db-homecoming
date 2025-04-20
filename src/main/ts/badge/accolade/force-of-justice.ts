import { BadgeData } from 'coh-content-db'
import { BombSquad } from '../achievement/bomb-squad'
import { FireMarshal } from '../achievement/fire-marshal'
import { Interceptor } from '../achievement/interceptor'
import { SecurityExpert } from '../achievement/security-expert'
import { PPDDeputy } from '../achievement/ppd-deputy'

export const ForceOfJustice: BadgeData = {
  type: 'accolade',
  key: 'force-of-justice',
  setTitleId: [646],
  name: [
    { alignment: 'hero', value: 'Force of Justice' },
    { alignment: 'villain', value: 'Force of Injustice' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have proven yourself as one of Paragon City's finest heroes by protecting all of the major banks in the city.` },
    { alignment: 'villain', value: `Paragon's bank employees are very confused by your new allegiances, and are that much slower to react when you show up to rob them.` },
  ],
  links: [
    { title: 'Force of Justice Badge', href: 'https://homecoming.wiki/wiki/Force_of_Justice_Badge' },
    { title: 'Force of Injustice Badge', href: 'https://homecoming.wiki/wiki/Force_of_Injustice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/force-of-justice.png',
  requirements: [
    { key: BombSquad.key, type: 'badge', badgeKey: BombSquad.key },
    { key: FireMarshal.key, type: 'badge', badgeKey: FireMarshal.key },
    { key: Interceptor.key, type: 'badge', badgeKey: Interceptor.key },
    { key: PPDDeputy.key, type: 'badge', badgeKey: PPDDeputy.key },
    { key: SecurityExpert.key, type: 'badge', badgeKey: SecurityExpert.key },
  ],
}
