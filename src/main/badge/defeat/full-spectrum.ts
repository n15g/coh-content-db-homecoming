import { BadgeData } from 'coh-content-db'

export const FullSpectrum: BadgeData = {
  type: 'DEFEAT',
  key: 'full-spectrum',
  setTitle: { id: 2063 },
  name: [
    { value: 'Full Spectrum' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'The Seedlings come in all sorts of pretty colors and make a satisfying \'pop\' when squished. If '
        + 'they weren\'t murderous devastating corrupting beasts intent on your annihilation, you might '
        + 'consider one as a pet. You have defeated one of each variety of Seedling spawned by the Seed '
        + 'of Hamidon to earn this badge.',
    },
  ],
  acquisition: 'Defeat one of each variety of Seedling spawned by The Seed of Hamidon',
  links: [
    { title: 'Full Spectrum Badge', href: 'https://homecoming.wiki/wiki/Full_Spectrum_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/full-spectrum.png' },
  ],
}
