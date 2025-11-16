import { ContactData } from 'coh-content-db'
import { KallistiWharf } from '../zone/kallisti-wharf'

export const ZoeLangston: ContactData = {
  key: 'zoe-langston',
  name: `Marigold 'Zoe' Langston`,
  title: 'Heiress to the Langston Dynasty',
  morality: 'any',
  location: { zoneKey: KallistiWharf.key, coords: [475, -280, 3899] },
  levelRange: [40, 50],
  links: [{ title: `Marigold 'Zoe' Langston`, href: `https://homecoming.wiki/wiki/Zoe_Langston` }],
}

