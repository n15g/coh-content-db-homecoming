import { ContactData } from 'coh-content-db'
import { NovaPraetoria } from '../zone/nova-praetoria'

export const DeputyAssistantOfInformation: ContactData = {
  key: 'deputy-assistant-of-information',
  name: 'Deputy Assistant of Information',
  title: 'The Deputy Assistant of the Ministry of Information',
  morality: 'loyalist',
  location: { zoneKey: NovaPraetoria.key, coords: [-5921, 329, 795] },
  levelRange: [1, 10],
  links: [{ title: 'Deputy Assistant of Information', href: 'https://homecoming.wiki/wiki/Deputy_Assistant_of_Information' }],
}
