import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const KeeperOfSecrets: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "keeper-of-secrets",
    setTitleId: 38,
    names: [
        {value: "Keeper of Secrets"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You have defeated the demon, Adamastor, brought forth by the Banished Pantheon to destroy the " +
                "world."
        }
    ],
    acquisition: "Defeat Adamastor, a monster who can be summoned in Echo: Dark Astoria",
    links: [
        {title: "Keeper of Secrets Badge", href: "https://homecoming.wiki/wiki/Keeper_of_Secrets_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/banished.png"}
    ],
};
