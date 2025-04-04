import { BadgeData } from 'coh-content-db'

export const Epitome: BadgeData = {
  type: 'achievement',
  key: 'epitome',
  setTitleId: [246, 1709],
  name: [
    { value: 'Epitome' },
    { alignment: 'praetorian', value: 'Philosopher' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You are the Epitome of heroism, and gratefully share your knowledge with younger heroes.' },
    { alignment: 'villain', value: `You've spent considerable time helping lesser villains realize their potential.` },
    {
      alignment: 'praetorian', value: `Like some Greek Philosopher, you're approached by wannabes and questioners who want to know the secrets of Praetoria.
By fighting alongside them, in a way you're revealing those secrets. That's philosophical enough.`,
    },
  ],
  acquisition: 'Sidekick another hero for 20 hours.',
  links: [
    { title: 'Epitome Badge', href: 'https://homecoming.wiki/wiki/Epitome_Badge' },
    { title: 'Philosopher Badge', href: 'https://homecoming.wiki/wiki/Philosopher_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/mentor-v.png' },
  ],
}
