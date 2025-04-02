import { BadgeData } from 'coh-content-db'
import { Levantera } from '../../contact/levantera'
import { SerpentDrummer } from '../../contact/serpent-drummer'
import { Gaussian } from '../../contact/gaussian'
import { TheDarkWatcher } from '../../contact/the-dark-watcher'

export const Vigilant: BadgeData = {
  type: 'ACCOLADE',
  key: 'vigilant',
  setTitle: { id: 2353 },
  name: 'Vigilant',
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You're always there when the people of Paragon City need you.` },
    { alignment: 'V', value: `Your shadow looms over not only the Rogue Isles and Paragon City, but the entire world.` },
  ],
  effect: 'Awards 20 reward merits.',
  links: [
    { title: 'Vigilant Badge', href: 'https://homecoming.wiki/wiki/Vigilant_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
  requirements: [
    { key: 'welcome-to-the-vanguard', type: 'ARC', missionName: 'Welcome to the Vanguard', contactKey: Levantera.key },
    { key: 'the-strange-case-of-benjamin-a-decker', type: 'ARC', missionName: 'The Strange Case of Benjamin A. Decker', contactKey: Levantera.key },
    { key: 'dreams-of-peace-and-acts-of-war', type: 'ARC', missionName: 'Dreams of Peace and Acts of War', contactKey: SerpentDrummer.key },
    { key: 'the-red-and-the-black', type: 'ARC', missionName: 'The Red and the Black', contactKey: Gaussian.key },
    { key: 'the-horror-of-war', type: 'ARC', missionName: 'The Horror of War', contactKey: TheDarkWatcher.key },
  ],
}
