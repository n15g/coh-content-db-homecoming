import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const WeaponMaster: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "weapon-master",
    setTitleId: 1937,
    names: [
        {type: Alternate.M, value: "Weapon Master"},
        {type: Alternate.F, value: "Warrior Princess"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: "You repelled the initial Praetorian invasion forces from Primal Earth and saved what remained " +
                "of Blyde Square from Battle Maiden!"
        }
    ],
    acquisition: "Complete the Apex Task Force",
    links: [
        {title: "Weapon Master Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Weapon_Master_Badge"},
        {title: "Warrior Princess Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Warrior_Princess_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/weapon-master.png"}
    ],
};
