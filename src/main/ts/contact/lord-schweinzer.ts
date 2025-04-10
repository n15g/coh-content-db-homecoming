import { badgeLink, ContactData } from 'coh-content-db'
import { PortOakes } from '../zone/port-oakes'
import { BloodyHands } from '../badge/defeat/bloody-hands'

export const LordSchweinzer: ContactData = {
  key: 'lord-schweinzer',
  name: 'Lord Schweinzer',
  title: 'Mayhem Deviser',
  location: { zoneKey: PortOakes.key, coords: [399.8, 126.5, -2496.7] },
  levelRange: [10, 50],
  links: [{ title: 'Lord Schweinzer', href: 'https://homecoming.wiki/wiki/Lord_Schweinzer' }],
  notes: `Provides access to Mayhem Missions on request, including out-levelled content.

Requires the ${badgeLink(BloodyHands)} badge and Level 10.`,
}
