import { BadgeData } from 'coh-content-db'

export const KittysGotClaws: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'kittys-got-claws',
  setTitle: { id: 1765 },
  name: [
    { value: 'Kitty\'s Got Claws' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You saw Bobcat do something no one else has seen; fight with all her effort. Despite her best '
        + 'efforts, you still managed to put her down.',
    },
  ],
  acquisition: 'In the third mission of the Tin Mage Mark II Task Force, defeat Neuron before Bobcat reaches 50% health, then defeat Bobcat',
  links: [
    { title: 'Kitty\'s Got Claws Badge', href: 'https://homecoming.wiki/wiki/Kitty%27s_Got_Claws_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png' },
  ],
}
