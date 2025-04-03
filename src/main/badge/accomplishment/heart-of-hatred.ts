import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DreamDoctor } from '../../contact/dream-doctor'

export const HeartOfHatred: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'heart-of-hatred',
  setTitle: { id: 2193 },
  name: 'Heart of Hatred',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You fought against Mot, the essence of hatred, and managed to win, saving the world from being devoured whole by the creature.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "The Choice of Hope" entry with number 22.20 at level 50.`,
  links: [
    { title: 'Heart of Hatred Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Hatred_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'the-choice-of-hope-ch2', type: 'ARC', missionName: 'The Choice of Hope (Second Half)', contactKey: DreamDoctor.key },
  ],
}
