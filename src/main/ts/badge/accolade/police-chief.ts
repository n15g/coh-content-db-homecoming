import { BadgeData } from 'coh-content-db'
import { LawEnforcer } from '../day-job/law-enforcer'
import { CityOfficial } from '../day-job/city-official'

export const PoliceChief: BadgeData = {
  type: 'accolade',
  key: 'police-chief',
  setTitleId: [1062],
  name: [
    { alignment: 'hero', value: 'Police Chief' },
    { alignment: 'villain', value: 'Corrupt Commissioner' },
  ],
  morality: 'heroic',
  badgeText: [
    {
      alignment: 'hero', value: `Your time spent working with both Paragon City Hall and the Paragon Police Department has earned you a great deal of respect.
While logged out in either Paragon City Hall or a Police Department you'll earn uses for your Police Chief's Baton power.`,
    },
    { alignment: 'villain', value: `The scandal caused by your switch to villainy brought down a City Representative and an entire PPD precinct.` },
  ],
  links: [
    { title: 'Police Chief Badge', href: 'https://homecoming.wiki/wiki/Police_Chief_Badge' },
    { title: 'Corrupt Commissioner Badge', href: 'https://homecoming.wiki/wiki/Corrupt_Commissioner_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/police-chief.png',
  requirements: [
    { key: LawEnforcer.key, type: 'badge', badgeKey: LawEnforcer.key },
    { key: CityOfficial.key, type: 'badge', badgeKey: CityOfficial.key },
  ],
}
