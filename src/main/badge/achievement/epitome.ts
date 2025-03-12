import { BadgeData } from 'coh-content-db'

export const Epitome: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'epitome',
  setTitle: { id: 246, praetorianId: 1709 },
  name: [
    { value: 'Epitome' },
    { alignment: 'P', value: 'Philosopher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'You are the Epitome of heroism, and gratefully share your knowledge with younger heroes.' },
    { alignment: 'V', value: 'You\'ve spent considerable time helping lesser villains realize their potential.' },
    {
      alignment: 'P', value: 'Like some Greek Philosopher, you\'re approached by wannabes and questioners who want to know '
        + 'the secrets of Praetoria. By fighting alongside them, in a way you\'re revealing those secrets. '
        + 'That\'s philosophical enough.',
    },
  ],
  acquisition: 'Sidekick another hero for 20 hours',
  links: [
    { title: 'Epitome Badge', href: 'https://homecoming.wiki/wiki/Epitome_Badge' },
    { title: 'Philosopher Badge', href: 'https://homecoming.wiki/wiki/Philosopher_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
