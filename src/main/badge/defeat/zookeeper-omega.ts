import { BadgeData } from 'coh-content-db'

export const ZookeeperOmega: BadgeData = {
  type: 'DEFEAT',
  key: 'zookeeper-omega',
  setTitle: { id: 2517 },
  name: [
    { value: 'Zookeeper Omega' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: `You are truly the Omega of all Zookeepers! Having bested K'ong and his horde of deadly Rikti Monkeys Vultures.
      
      You'd like to think you've built up a tolerance to poisonous gas... Hopefully!`,
    },
  ],
  acquisition: `Defeat the boss encounter in the Advanced Mode of the Lady Grey's Task Force`,
  links: [
    { title: 'Zookeeper Omega Badge', href: 'https://homecoming.wiki/wiki/Zookeeper_Omega_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/zookeeper-omega.png' },
  ],
}
