import { BadgeData } from 'coh-content-db'

export const SacrificialLamb: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'sacrificial-lamb',
  setTitle: { id: 2166 },
  name: [
    { value: 'Sacrificial Lamb' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Though two heroes remained captured and indentured to Diabolique, you chose to ignore them '
        + 'during the final battle and focused instead on Diabolique. In spite of the extra complications '
        + 'that this choice brought to your battle against Diabolique, you still prevailed against her '
        + 'and put an end to her mad scheme to become Death Incarnate during Dilemma Diabolique.',
    },
  ],
  acquisition: 'Defeat Diabolique without defeating the two heroes under her control during the final battle of the Dilemma Diabolique Trial',
  links: [
    { title: 'Sacrificial Lamb Badge', href: 'https://homecoming.wiki/wiki/Sacrificial_Lamb_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png' },
  ],
}
