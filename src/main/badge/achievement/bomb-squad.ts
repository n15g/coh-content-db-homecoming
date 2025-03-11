import { BadgeData } from 'coh-content-db'

export const BombSquad: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'bomb-squad',
  setTitle: { id: 641 },
  name: [
    { alignment: 'H', value: 'Bomb Squad' },
    { alignment: 'V', value: 'Blue Wire' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You were right. It WAS the red wire first.' },
    {
      alignment: 'V', value: 'The best way to make bombs that can\'t be defused is to train on the Bomb Squad. Needless to '
        + 'say, on yours it\'s the Blue Wire.',
    },
  ],
  acquisition: 'Stop 5 bombing side missions in Safeguard Missions',
  links: [
    { title: 'Bomb Squad Badge', href: 'https://homecoming.wiki/wiki/Bomb_Squad_Badge' },
    { title: 'Blue Wire Badge', href: 'https://homecoming.wiki/wiki/Blue_Wire_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/bomb-squad.png' },
  ],
}
