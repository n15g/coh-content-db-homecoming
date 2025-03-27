import { BadgeData, badgeLink } from 'coh-content-db'
import { LawEnforcer } from '../day-job/law-enforcer'
import { CityOfficial } from '../day-job/city-official'

export const PoliceChief: BadgeData = {
  type: 'ACCOLADE',
  key: 'police-chief',
  setTitle: { id: 1062 },
  name: [
    { alignment: 'H', value: 'Police Chief' },
    { alignment: 'V', value: 'Corrupt Commissioner' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Your time spent working with both Paragon City Hall and the Paragon Police Department has earned you a great deal of respect.  While logged out in either Paragon City Hall or a Police Department you'll earn uses for your Police Chief's Baton power.` },
    { alignment: 'V', value: `The scandal caused by your switch to villainy brought down a City Representative and an entire PPD precinct.` },
  ],
  acquisition: `Earn the ${badgeLink(LawEnforcer)} and ${badgeLink(CityOfficial)} day jobs badges.`,
  links: [
    { title: 'Police Chief Badge', href: 'https://homecoming.wiki/wiki/Police_Chief_Badge' },
    { title: 'Corrupt Commissioner Badge', href: 'https://homecoming.wiki/wiki/Corrupt_Commissioner_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/police-chief.png' },
  ],
  partials: [
    { key: LawEnforcer.key, type: 'BADGE', badgeKey: LawEnforcer.key },
    { key: CityOfficial.key, type: 'BADGE', badgeKey: CityOfficial.key },
  ],
}
