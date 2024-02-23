import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ZookeeperOmega: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "zookeeper-omega",
    setTitleId: 2517,
    names: [
        {value: "Zookeeper Omega"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `You are truly the Omega of all Zookeepers! Having bested K'ong and his horde of deadly Rikti Monkeys Vultures.
			
			You'd like to think you've built up a tolerance to poisonous gas... Hopefully!`
        }
    ],
    acquisition: `Defeat the boss encounter in the Advanced Mode of the Lady Grey's Task Force`,
    links: [
        {title: "Zookeeper Omega Badge", href: "https://homecoming.wiki/wiki/Zookeeper_Omega_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/zookeeper-omega.png"}
    ],
};