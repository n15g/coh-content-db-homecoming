import { BadgeData } from 'coh-content-db'
import { CitadelTaskForce } from '../../mission/citadel-task-force'

export const CitadelsAssistant: BadgeData = {
  type: 'accomplishment',
  key: 'citadels-assistant',
  setTitleId: [64],
  name: [
    { alignment: 'hero', value: `Citadel's Assistant` },
    { alignment: 'villain', value: `Citadel's Betrayer` },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Citadel has awarded you this medal for helping him rid the world of the evil robots based on his programming.' },
    { alignment: 'villain', value: 'Citadel now questions your true motives in assisting him, and fears (as much as an android can) that you will find a way to use his technology for evil.' },
  ],
  links: [
    { title: `Citadel's Assistant Badge`, href: 'https://homecoming.wiki/wiki/Citadel%27s_Assistant_Badge' },
    { title: `Citadel's Betrayer Badge`, href: 'https://homecoming.wiki/wiki/Citadel%27s_Betrayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/citadels-assistant.png',
  requirements: [
    { key: CitadelTaskForce.key, type: 'mission', missionKey: CitadelTaskForce.key },
  ],
}
