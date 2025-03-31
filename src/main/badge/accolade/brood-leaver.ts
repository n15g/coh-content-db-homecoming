import { BadgeData } from 'coh-content-db'
import { Grounded } from '../day-job/grounded'
import { ArachnosTraitor } from '../day-job/arachnos-traitor'

export const BroodLeaver: BadgeData = {
  type: 'ACCOLADE',
  key: 'brood-leaver',
  setTitle: { id: 1074 },
  name: [
    { alignment: 'H', value: 'Brood Leaver' },
    { alignment: 'V', value: 'Brood Leader' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: `High status within Arachnos was not enough to keep you bound to the Rogue Isles.
Your exit caused a power vacuum which some other young upstart quickly filled.`,
    },
    {
      alignment: 'V',
      value: `You have climbed the ranks of Arachnos by being both a pilot and a city official earning you the Brood Leader Accolade.
While logged out in either Grandville or near a Black Helicoper you will earn fuel for your Traveler's Jet Pack at an accelerated rate.`,
    },
  ],
  links: [
    { title: 'Brood Leaver Badge', href: 'https://homecoming.wiki/wiki/Brood_Leaver_Badge' },
    { title: 'Brood Leader Badge', href: 'https://homecoming.wiki/wiki/Brood_Leader_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/brood-leaver.png' },
  ],
  requirements: [[
    { key: Grounded.key, type: 'BADGE', badgeKey: Grounded.key },
    { key: ArachnosTraitor.key, type: 'BADGE', badgeKey: ArachnosTraitor.key },
  ]],
}
