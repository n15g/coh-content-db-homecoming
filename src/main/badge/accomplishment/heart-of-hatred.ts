import { BadgeData } from 'coh-content-db'

export const HeartOfHatred: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'heart-of-hatred',
  setTitle: { id: 2193 },
  name: [
    { value: 'Heart of Hatred' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You fought against Mot, the essence of hatred, and managed to win, saving the world from being '
        + 'devoured whole by the creature.',
    },
  ],
  acquisition: 'Complete the final story arc from Dream Doctor',
  links: [
    { title: 'Heart of Hatred Badge', href: 'https://homecoming.wiki/wiki/Heart_of_Hatred_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
