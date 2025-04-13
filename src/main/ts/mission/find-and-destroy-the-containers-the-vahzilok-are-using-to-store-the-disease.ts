import { MissionData } from 'coh-content-db'
import { OliviaChung } from '../contact/olivia-chung'
import { DrAnnMarieEngles } from '../contact/dr-ann-marie-engles'
import { JulianaNehring } from '../contact/juliana-nehring'
import { PavelGarnier } from '../contact/pavel-garnier'

export const FindAndDestroyTheContainersTheVahzilokAreUsingToStoreTheDisease: MissionData = {
  key: 'find-and-destroy-the-containers-the-vahzilok-are-using-to-store-the-disease',
  name: 'Find and destroy the containers the Vahzilok are using to store the disease',
  type: 'mission',
  morality: 'heroic',
  contactKeys: [OliviaChung.key, DrAnnMarieEngles.key, JulianaNehring.key, PavelGarnier.key],
  levelRange: [15, 20],
  links: [
    { title: '(Olivia Chung) Find and destroy the containers the Vahzilok are using to store the disease', href: 'https://homecoming.wiki/wiki/Olivia_Chung#Find_and_destroy_the_containers_the_Vahzilok_are_using_to_store_the_disease_(15-20)' },
    { title: '(Dr. Ann-Marie Engles) Find and destroy the containers the Vahzilok are using to store the disease', href: 'https://homecoming.wiki/wiki/Dr._Ann-Marie_Engles#Find_and_destroy_the_containers_the_Vahzilok_are_using_to_store_the_disease_(15-20)' },
    { title: '(Juliana Nehring) Find and destroy the containers the Vahzilok are using to store the disease', href: 'https://homecoming.wiki/wiki/Juliana_Nehring#Find_and_destroy_the_containers_the_Vahzilok_are_using_to_store_the_disease_(15-20)' },
    { title: '(Pavel Garnier) Find and destroy the containers the Vahzilok are using to store the disease', href: 'https://homecoming.wiki/wiki/Pavel_Garnier#Find_and_destroy_the_containers_the_Vahzilok_are_using_to_store_the_disease_(15-20)' },
  ],
  flashback: {
    id: '0.07',
    name: 'Vahzilok Wasting Disease',
    levelRange: [15, 19],
  },
}
