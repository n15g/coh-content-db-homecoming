import { BadgeData } from 'coh-content-db'
import { LawEnforcer } from '../day-job/law-enforcer'
import { Banker } from '../day-job/banker'

export const SecurityChief: BadgeData = {
  type: 'accolade',
  key: 'security-chief',
  setTitleId: [1063],
  name: [
    { alignment: 'hero', value: 'Security Chief' },
    { alignment: 'villain', value: 'Security Breach' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `Your time spent protecting the banks of Paragon City has earned you the position of Security Chief.  While logged out in either a Vault or a Police Department will earn you charges of Tear Gas.` },
    { alignment: 'villain', value: `Every major bank and secure facility had to change their locks and passcodes when you went to the Rogue Isles.` },
  ],
  links: [
    { title: 'Security Chief Badge', href: 'https://homecoming.wiki/wiki/Security_Chief_Badge' },
    { title: 'Security Breach Badge', href: 'https://homecoming.wiki/wiki/Security_Breach_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/security-chief.png',
  requirements: [
    { key: LawEnforcer.key, type: 'badge', badgeKey: LawEnforcer.key },
    { key: Banker.key, type: 'badge', badgeKey: Banker.key },
  ],
}
