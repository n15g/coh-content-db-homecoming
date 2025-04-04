import { BadgeData } from 'coh-content-db'
import { Grounded } from '../day-job/grounded'
import { ArachnosTraitor } from '../day-job/arachnos-traitor'

export const BroodLeaver: BadgeData = {
  type: 'accolade',
  key: 'brood-leaver',
  setTitleId: [1074],
  name: [
    { alignment: 'hero', value: 'Brood Leaver' },
    { alignment: 'villain', value: 'Brood Leader' },
  ],
  morality: 'villainous',
  badgeText: [
    {
      alignment: 'hero', value: `High status within Arachnos was not enough to keep you bound to the Rogue Isles.
Your exit caused a power vacuum which some other young upstart quickly filled.`,
    },
    {
      alignment: 'villain', value: `You have climbed the ranks of Arachnos by being both a pilot and a city official earning you the Brood Leader Accolade.
While logged out in either Grandville or near a Black Helicoper you will earn fuel for your Traveler's Jet Pack at an accelerated rate.`,
    },
  ],
  links: [
    { title: 'Brood Leaver Badge', href: 'https://homecoming.wiki/wiki/Brood_Leaver_Badge' },
    { title: 'Brood Leader Badge', href: 'https://homecoming.wiki/wiki/Brood_Leader_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/brood-leaver.png',
  requirements: [
    { key: Grounded.key, type: 'badge', badgeKey: Grounded.key },
    { key: ArachnosTraitor.key, type: 'badge', badgeKey: ArachnosTraitor.key },
  ],
}
