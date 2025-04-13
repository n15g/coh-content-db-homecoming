import { BadgeData, contactLink } from 'coh-content-db'
import { TheLadyGrey } from '../../contact/the-lady-grey'

export const ZookeeperOmega: BadgeData = {
  type: 'defeat',
  key: 'zookeeper-omega',
  setTitleId: [2517],
  name: 'Zookeeper Omega',
  morality: 'all',
  badgeText: `You are truly the Omega of all Zookeepers! Having bested K'ong and his horde of deadly Rikti Monkeys Vultures.
You'd like to think you've built up a tolerance to poisonous gas... Hopefully!`,
  acquisition: `Defeat the boss encounter in the Advanced Mode of ${contactLink(TheLadyGrey)}'s Task Force.`,
  links: [
    { title: 'Zookeeper Omega Badge', href: 'https://homecoming.wiki/wiki/Zookeeper_Omega_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/zookeeper-omega.png',
}
