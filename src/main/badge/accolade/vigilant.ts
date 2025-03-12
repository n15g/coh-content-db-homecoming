import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../map/rikti-war-zone'

export const Vigilant: BadgeData = {
  type: 'ACCOLADE',
  key: 'vigilant',
  setTitle: { id: 2353 },
  name: [
    { value: 'Vigilant' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You're always there when the people of Paragon City need you.` },
    { alignment: 'V', value: `Your shadow looms over not only the Rogue Isles and Paragon City, but the entire world.` },
  ],
  acquisition: `Complete every story arc in [map:${RiktiWarZone.key}]`,
  notes: `
This badge rewards 20 reward merits for completing the following story arcs (contact in parentheses):
* Welcome to Vanguard (Levantera)
* The Strange Case of Benjamin A. Decker (Levantera)
* Dreams of Peace and Acts of War (Serpent Drummer)
* The Red and the Black (Gaussian)
* The Horror of War (The Dark Watcher)
`,
  links: [
    { title: 'Vigilant Badge', href: 'https://homecoming.wiki/wiki/Vigilant_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/storyarc-acc-vara-v.png' },
  ],
}
