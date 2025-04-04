import { BadgeData } from 'coh-content-db'
import { StephaniePeebles } from '../../contact/stephanie-peebles'
import { LongJack } from '../../contact/long-jack'
import { TobiasHansen } from '../../contact/tobias-hansen'
import { LarsHansen } from '../../contact/lars-hansen'

export const PortAuthority: BadgeData = {
  type: 'accolade',
  key: 'port-authority',
  setTitleId: [2374],
  name: 'Port Authority',
  morality: 'all',
  badgeText: `You've obtained this accolade by completing every story arc within Striga Isle.`,
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Port Authority Badge', href: 'https://homecoming.wiki/wiki/Port_Authority_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png',
  requirements: [
    { key: 'ring-of-peebles', type: 'ARC', missionName: 'Ring of Peebles', contactKey: StephaniePeebles.key },
    { key: 'hear-and-now', type: 'ARC', missionName: 'Hear and Now', contactKey: LongJack.key },
    { key: 'return-to-vampyr-mountain', type: 'ARC', missionName: 'Return to Vampyr Mountain', contactKey: TobiasHansen.key },
    { key: 'a-madmans-council', type: 'ARC', missionName: `A Madman's Council`, contactKey: LarsHansen.key },
  ],
}
