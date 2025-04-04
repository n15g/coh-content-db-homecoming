import { BadgeData } from 'coh-content-db'

export const KittysGotClaws: BadgeData = {
  type: 'achievement',
  key: 'kittys-got-claws',
  setTitleId: [1765],
  name: [
    { value: `Kitty's Got Claws` },
  ],
  morality: 'all',
  badgeText: 'You saw Bobcat do something no one else has seen; fight with all her effort. Despite her best efforts, you still managed to put her down.',
  acquisition: 'In the third mission of the Tin Mage Mark II Task Force, defeat Neuron before Bobcat reaches 50% health, then defeat Bobcat',
  links: [
    { title: `Kitty's Got Claws Badge`, href: 'https://homecoming.wiki/wiki/Kitty%27s_Got_Claws_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-alpha.png',
}
