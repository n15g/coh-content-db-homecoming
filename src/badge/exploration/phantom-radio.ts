import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const PhantomRadio: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "phantom-radio",
    setTitleId: 1782,
    names: [{value: "Phantom Radio"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [2985.0, 204.0, 3676.0],
    badgeText: [{
        value: "Since the fall of Astoria, shortwave enthusiasts in Paragon City and beyond have occasionally happened upon strange transmissions of ghostly whispers, wailing pleas," +
            " bestial shouts of rage, and haunting voices chanting in dead languages." +
            " Those who have heard these grim transmissions nearly always suffer for it; their lives claimed by some unexpected calamity or their minds by a sudden and inexplicable mental illness." +
            " M.A.G.I. eventually traced the transmission to this radio tower."
    }],
    notes: "Located in [map:echo-dark-astoria] 430 yards SE of the Toffet Terrace marker, at the base of the radio tower on top the building.",
    links: [
        {title: "Phantom Radio Badge", href: "https://paragonwiki.com/wiki/Phantom_Radio_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "5"
};
