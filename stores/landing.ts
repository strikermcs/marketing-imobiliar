import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore"
import { db } from "~/libs/firebase"
import type { IPromoSection, IServiceSectionItem } from "~/types"
import { useNotificationStore } from "./notification"
import { deleteFile } from "~/services/uploadFile"

interface ILandingState {
    promo: IPromoSection | null
    services: IServiceSectionItem[]
}

export const useLandingStore = defineStore('landing', {
    state: (): ILandingState => ({
        promo: null,
        services: []
    }),

    actions: {

        //PROMO SECTION

        async getPromoSection() {
            try {
                const q = query(collection(db, "promo"))
                const rezult = await getDocs(q)

                rezult.forEach((doc) => {
                    this.promo = { id: doc.id, ...doc.data() } as IPromoSection
                })
                
            } catch (error) {
                console.log(error)
            }
        },

        async updatePromoSection(item : IPromoSection) {
            const notify = useNotificationStore()
            const docRef = doc(db, "promo", item.id as string)

            const data: Partial<IPromoSection> = {
                title: item.title,
                subtitle: item.subtitle,
                boldText: item.boldText,
                description: item.description
            }

            updateDoc(docRef, data).then(() => {
                if(this.promo) { 
                    this.promo.title = item.title
                    this.promo.subtitle = item.subtitle
                    this.promo.boldText = item.boldText
                    this.promo.description = item.description
                } 
                notify.SetNofication("Success", "Promo section is successfully updated", "success")
            }) 
        },

        //SERVICE SECTION

        async getServicesSectionItems() {
            try {
                const q = query(collection(db, "services"))
                const rezult = await getDocs(q)

                rezult.forEach((doc) => {
                    this.services.push({id: doc.id, ...doc.data()} as IServiceSectionItem) 
                })
                
            } catch (error) {
                console.log(error)
            }
        },

        async AddServiceSectionItem(item: IServiceSectionItem) {
            const notify = useNotificationStore()
            try {
                const docRef = await addDoc(collection(db, "services"), item)
                item.id = docRef.id
                this.services.push(item)
                notify.SetNofication("Success", "Service item is successfully added", "success")
            } catch (error) {
                notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
            }
        },

        async deleteServiceSectionItem(item: IServiceSectionItem) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "services", item.id as string)
                deleteDoc(docRef).then(() => {
                    this.services = this.services.filter(s => s.id != item.id)
                    deleteFile(`images/services/${item.image.match('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')?.[0]}`)
                    notify.SetNofication("Success", "Service item is successfully deleted", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
            }
        },

        async updateServiceSectionItem(item: IServiceSectionItem) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "services", item.id as string)

                const data : Partial<IServiceSectionItem> = {
                    title: item.title,
                    description: item.description,
                    image: item.image
                }

                updateDoc(docRef, data).then(() => {
                    this.services.forEach(s => {
                        if(s.id === item.id) {
                            s.id = item.id
                            s.title = item.title
                            s.description = item.description
                            s.image = item.image
                        }
                    })
                    notify.SetNofication("Success", "Service item is successfully updated", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error update service item. error: ${error}`, "error")
            }
        }

    }
})