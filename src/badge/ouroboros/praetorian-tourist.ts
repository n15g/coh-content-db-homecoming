import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const PraetorianTourist: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "praetorian-tourist",
    setTitleId: 1474,
    names: [
        {value: "Praetorian Tourist"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You've traveled to Praetoria under the guidance of the Menders of Ouroboros, earning yourself the Praetorian Tourist badge.`}],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/praetorian-tourist.png"}],
    acquisition: "Complete a Praetorian arc through Ouroboros"
};
