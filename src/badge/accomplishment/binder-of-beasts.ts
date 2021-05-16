import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const BinderOfBeasts: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "binder-of-beasts",
    setTitleId: 512,
    names: [
        {value: "Binder of Beasts"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You fought and defeated the dreaded demon Bat'Zul, the Beast Beneath the Mountain."}
    ],
    acquisition: "Complete the Virgil Tarikoss Strike Force: The Beast Beneath the Mountain",
    links: [
        {title: "Binder of Beasts Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Binder_of_Beasts_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/binder-of-beasts.png"}
    ],
};
