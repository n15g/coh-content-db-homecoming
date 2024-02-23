import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {FirstWard} from "../../map/first-ward";

export const FearlessInsurgent: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "fearless-insurgent",
    setTitleId: 2050,
    names: [{value: "Fearless Insurgent"}],
    alignment: ALIGNMENT_ANY,
    mapKey: FirstWard.key,
    location: [-626.0, 57.0, -2656.0],
    badgeText: [{
        value: `You have penetrated the heart of the D.U.S.T. Ranger facility, a breach in security that the rangers will be spending many long hours analyzing, pondering,
and adjusting procedures over.
Heads will roll.
You represent what they fear the most: a dedicated, powerful, fearless insurgent who penetrates their defenses and wreaks havoc.`
    }],
    notes: `Located in [map:${FirstWard.key}] in the Free-Fire Zone neighborhood, 90 yards due west of the map marker; east of the CTA building.`,
    links: [
        {title: "Fearless Insurgent Badge", href: "https://homecoming.wiki/wiki/Fearless_Insurgent_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "3"
};
