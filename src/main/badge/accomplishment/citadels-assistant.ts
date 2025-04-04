import { BadgeData } from 'coh-content-db'

export const CitadelsAssistant: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'citadels-assistant',
  setTitle: { id: 64 },
  name: [
    { alignment: 'H', value: 'Citadel\'s Assistant' },
    { alignment: 'V', value: 'Citadel\'s Betrayer' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'Citadel has awarded you this medal for helping him rid the world of the evil robots based on '
        + 'his programming.',
    },
    {
      alignment: 'V', value: 'Citadel now questions your true motives in assisting him, and fears (as much as an android '
        + 'can) that you will find a way to use his technology for evil.',
    },
  ],
  acquisition: 'Complete the Citadel Task Force: Citadel\'s Children',
  links: [
    { title: 'Citadel\'s Assistant Badge', href: 'https://homecoming.wiki/wiki/Citadel%27s_Assistant_Badge' },
    { title: 'Citadel\'s Betrayer Badge', href: 'https://homecoming.wiki/wiki/Citadel%27s_Betrayer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/citadels-assistant.png' },
  ],
}
