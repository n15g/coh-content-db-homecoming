import { BadgeData } from 'coh-content-db'

export const Leviathan: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'leviathan',
  setTitle: { id: 514 },
  name: [
    { value: 'Leviathan' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You have fought and defeated the awakened Eye of the Leviathan in the Temple of the Waters '
        + 'deep beneath Sharkhead Isle.',
    },
  ],
  acquisition: 'Complete the Operative Renault Strike Force: The Temple of the Waters',
  links: [
    { title: 'Leviathan Badge', href: 'https://homecoming.wiki/wiki/Leviathan_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/leviathan.png' },
  ],
}
