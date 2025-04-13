import { ContactData } from 'coh-content-db'
import { IndependencePort } from '../zone/independence-port'

export const WilmaPeterson: ContactData = {
  key: 'wilma-peterson',
  name: 'Wilma Peterson',
  title: 'Hazardous Waste Disposal Expert',
  morality: 'heroic',
  location: { zoneKey: IndependencePort.key, coords: [-2184, 0, 4724] },
  levelRange: [20, 24],
  links: [{ title: 'Wilma Peterson', href: 'https://homecoming.wiki/wiki/Wilma_Peterson' }],
}
