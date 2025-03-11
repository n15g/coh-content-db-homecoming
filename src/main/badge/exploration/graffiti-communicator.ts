import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../map/the-hollows'

export const GraffitiCommunicator: BadgeData = {
  type: 'EXPLORATION',
  key: 'graffiti-communicator',
  setTitle: { id: 1518 },
  name: [{ value: 'Graffiti Communicator' }],
  alignment: ['H'],
  mapKey: TheHollows.key,
  loc: [-1384, 494, 1492],
  badgeText: [{
    value: 'Longbow works side by side with the Legacy Chain to maintain this small outpost in the Hollows, using it to relay the activities of the Circle of Thorns in the nearby area.'
      + ' They have run into ongoing issues with the various gangs in the Hollows spray-painting the building with their logos.',
  }],
  notes: 'Located near one of the buildings on top of the mountain in the Eastgate Heights neighborhood.',
  links: [
    { title: 'Graffiti Communicator Badge', href: 'https://homecoming.wiki/wiki/Graffiti_Communicator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
