import { BadgeData } from 'coh-content-db'
import { CitadelTaskForceRevamp } from '../../mission/citadel-task-force-revamp'

export const CitadelsColleague: BadgeData = {
  type: 'accomplishment',
  key: 'citadels-colleague',
  gameId: 'CitadelRevampTF',
  setTitleId: [2606],
  name: [
    { alignment: 'hero', value: `Citadel's Colleague` },
    { alignment: 'villain', value: `Citadel's Folly` },
  ],
  releaseDate: '2026-10-06',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'Citadel has bequeathed you this medal for putting an end to the new generation of Zenith Mech Men.' },
    { alignment: 'villain', value: 'Citadel has flagged your assistance in repelling the newest iteration of Zenith Mech Men as anomalous behavior. Your current allegiance has forced him to conclude that relying on you was a tactical error.' },
  ],
  links: [
    { title: `Citadel's Colleague Badge`, href: 'https://homecoming.wiki/wiki/Citadel%27s_Colleague_Badge' },
    { title: `Citadel's Folly Badge`, href: 'https://homecoming.wiki/wiki/Citadel%27s_Folly_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/citadels-assistant.png',
  requirements: [
    { key: CitadelTaskForceRevamp.key, type: 'mission', missionKey: CitadelTaskForceRevamp.key },
  ],
}
