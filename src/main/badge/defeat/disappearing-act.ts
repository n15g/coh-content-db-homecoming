import { BadgeData } from 'coh-content-db'

export const DisappearingAct: BadgeData = {
  type: 'DEFEAT',
  key: 'disappearing-act',
  setTitle: { id: 2057 },
  name: [
    { value: 'Disappearing Act' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'It is somewhat difficult to discern, but you\'ve gotten rid of a fair amount Apparitions... You '
        + 'think. You defeated several Apparitions to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Apparitions',
  links: [
    { title: 'Disappearing Act Badge', href: 'https://homecoming.wiki/wiki/Disappearing_Act_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/disappearing-act.png' },
  ],
}
