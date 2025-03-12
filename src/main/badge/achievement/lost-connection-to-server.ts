import { BadgeData } from 'coh-content-db'

export const LostConnectionToServer: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'lost-connection-to-server',
  setTitle: { id: 2082 },
  name: [
    { value: 'Lost Connection to Server' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'When you finally were able to confront Shalice Tilman within the depths of the Minds of '
        + 'Mayhem, you found that she would not go easily, for she was strongly connected to the Seer '
        + 'Network. Despite this difficulty, you found a way to sever her connections with little '
        + 'trouble, never allowing her to regain her strength after being chased from Malaise\'s broken '
        + 'body.',
    },
  ],
  acquisition: 'Defeat Shalice Tilman without missing any opportunity to sever her connection to the Seer Network, and then complete the trial',
  links: [
    { title: 'Lost Connection to Server Badge', href: 'https://homecoming.wiki/wiki/Lost_Connection_to_Server_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-mom.png' },
  ],
}
