import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const GraffitiCommunicator: BadgeData = {
  type: 'exploration',
  key: 'graffiti-communicator',
  setTitleId: [1518],
  name: 'Graffiti Communicator',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `Longbow works side by side with the Legacy Chain to maintain this small outpost in the Hollows, using it to relay the activities of the Circle of Thorns in the nearby area.
They have run into ongoing issues with the various gangs in the Hollows spray-painting the building with their logos.`,
  notes: 'Located near one of the buildings on top of the mountain in the Eastgate Heights neighborhood.',
  links: [
    { title: 'Graffiti Communicator Badge', href: 'https://homecoming.wiki/wiki/Graffiti_Communicator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheHollows.key, coords: [-1384, 494, 1492], icon: 'badge', iconText: '6' } },
  ],
}
