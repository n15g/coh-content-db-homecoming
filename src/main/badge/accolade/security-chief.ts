import { BadgeData, badgeLink } from 'coh-content-db'
import { LawEnforcer } from '../day-job/law-enforcer'
import { Banker } from '../day-job/banker'

export const SecurityChief: BadgeData = {
  type: 'ACCOLADE',
  key: 'security-chief',
  setTitle: { id: 1063 },
  name: [
    { alignment: 'H', value: 'Security Chief' },
    { alignment: 'V', value: 'Security Breach' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: `Your time spent protecting the banks of Paragon City has earned you the position of Security Chief.  While logged out in either a Vault or a Police Department will earn you charges of Tear Gas.` },
    { alignment: 'V', value: `Every major bank and secure facility had to change their locks and passcodes when you went to the Rogue Isles.` },
  ],
  links: [
    { title: 'Security Chief Badge', href: 'https://homecoming.wiki/wiki/Security_Chief_Badge' },
    { title: 'Security Breach Badge', href: 'https://homecoming.wiki/wiki/Security_Breach_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/security-chief.png' },
  ],
  partials: [
    { key: LawEnforcer.key, type: 'BADGE', badgeKey: LawEnforcer.key },
    { key: Banker.key, type: 'BADGE', badgeKey: Banker.key },
  ],
}
