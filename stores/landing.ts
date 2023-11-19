import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore"
import { db } from "~/libs/firebase"
import type { IGalleryImage, IPromoSection, IQuestion, IServiceAndPrice, IServiceSectionItem, ITestimonial } from "~/types"
import { useNotificationStore } from "./notification"
import { deleteFile } from "~/services/uploadFile"


interface ILandingState {
    promo: IPromoSection | null
    services: IServiceSectionItem[]
    benefits: IServiceSectionItem[]
    questions: IQuestion[],
    pricesAndServices: IServiceAndPrice[],
    gallery: IGalleryImage[],
    testimonials: ITestimonial[]
}

export const useLandingStore = defineStore('landing', {
    state: (): ILandingState => ({
        promo: null,
        services: [],
        benefits: [],
        questions: [],
        pricesAndServices: [],
        gallery: [],
        testimonials: []
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
                let serviceItems:IServiceSectionItem[] = [] 

                rezult.forEach((doc) => {
                    serviceItems.push({id: doc.id, ...doc.data()} as IServiceSectionItem) 
                })

                this.services = [...serviceItems].sort((a,b) => a.order! - b.order!)
                
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
        },

        async saveServicesSectionItemsOrder() {
            let newOrder = 0
            for await (const service of this.services) {
                try {
                    const docRef = doc(db, "services", service.id as string)
    
                    const data : Partial<IServiceSectionItem> = {
                        order: newOrder
                    }
                   
                   await updateDoc(docRef, data)

                   newOrder++
                } catch {

                }
            }
        },

        //BENEFITS SECTION       
        async getBenefitsSectionItems() {
                try {
                    const q = query(collection(db, "benefits"))
                    const rezult = await getDocs(q)
                    let benefitsItems:IServiceSectionItem[] = []
    
                    rezult.forEach((doc) => {
                        benefitsItems.push({id: doc.id, ...doc.data()} as IServiceSectionItem) 
                    })

                    this.benefits = [...benefitsItems].sort((a,b) => a.order! - b.order!)
                    
                } catch (error) {
                    console.log(error)
                }
        },

        async AddBenefitSectionItem(item: IServiceSectionItem) {
                const notify = useNotificationStore()
                try {
                    const docRef = await addDoc(collection(db, "benefits"), item)
                    item.id = docRef.id
                    this.benefits.push(item)
                    notify.SetNofication("Success", "Benefits item is successfully added", "success")
                } catch (error) {
                    notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
                }
        },

        async deleteBenefitSectionItem(item: IServiceSectionItem) {
                const notify = useNotificationStore()
                try {
                    const docRef = doc(db, "benefits", item.id as string)
                    deleteDoc(docRef).then(() => {
                        this.benefits = this.benefits.filter(s => s.id != item.id)
                        deleteFile(`images/services/${item.image.match('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')?.[0]}`)
                        notify.SetNofication("Success", "Benefit item is successfully deleted", "success")
                    })
                } catch (error) {
                    notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
                }
        },

        async updateBenefitSectionItem(item: IServiceSectionItem) {
                const notify = useNotificationStore()
                try {
                    const docRef = doc(db, "benefits", item.id as string)
    
                    const data : Partial<IServiceSectionItem> = {
                        title: item.title,
                        description: item.description,
                        image: item.image
                    }
    
                    updateDoc(docRef, data).then(() => {
                        this.benefits.forEach(s => {
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
        },

        async saveBenefitsSectionItemsOrder() {
            let newOrder = 0
            for await (const item of this.benefits) {
                try {
                    const docRef = doc(db, "benefits", item.id as string)
    
                    const data : Partial<IServiceSectionItem> = {
                        order: newOrder
                    }
                    
                   await updateDoc(docRef, data)

                   newOrder++
                } catch {

                }
            }
        },

        //Questions SECTION
        async getQuestionSectionItems() {
            try {
                const q = query(collection(db, "questions"))
                const rezult = await getDocs(q)
                let Items:IQuestion[] = []

                rezult.forEach((doc) => {
                    Items.push({id: doc.id, ...doc.data()} as IQuestion) 
                })

                this.questions = [...Items].sort((a,b) => a.order! - b.order!)
                
            } catch (error) {
                console.log(error)
            }
        },
        async AddQuestionSectionItem(item: IQuestion) {
            const notify = useNotificationStore()
            try {
                const docRef = await addDoc(collection(db, "questions"), item)
                item.id = docRef.id
                this.questions.push(item)
                notify.SetNofication("Success", "Question item is successfully added", "success")
            } catch (error) {
                notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
            }
        },
        async deleteQuestionSectionItem(item: IQuestion) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "questions", item.id as string)
                deleteDoc(docRef).then(() => {
                    this.questions = this.questions.filter(s => s.id != item.id)
                    notify.SetNofication("Success", "Question item is successfully deleted", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
            }
        },
        async updateQuestionSectionItem(item: IQuestion) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "questions", item.id as string)
                const data : Partial<IQuestion> = {
                    question: item.question,
                    answer: item.answer,    
                }
                updateDoc(docRef, data).then(() => {
                    this.questions.forEach(s => {
                        if(s.id === item.id) {
                            s.id = item.id
                            s.question = item.question
                            s.answer = item.answer
                        }
                    })
                    notify.SetNofication("Success", "Service item is successfully updated", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error update service item. error: ${error}`, "error")
            }
        },

        async saveQuestionsSectionItemsOrder() {
            let newOrder = 0
            for await (const item of this.questions) {
                try {
                    const docRef = doc(db, "questions", item.id as string)
    
                    const data : Partial<IQuestion> = {
                        order: newOrder
                    }
                    
                   await updateDoc(docRef, data)

                   newOrder++
                } catch {

                }
            }
        },
        
        //PRICES AND SERVICES SECTION
        async getPricesSectionItems() {
            try {
                const q = query(collection(db, "prices"))
                const rezult = await getDocs(q)
                let Items:IServiceAndPrice[] = []

                rezult.forEach((doc) => {
                    Items.push({id: doc.id, ...doc.data()} as IServiceAndPrice) 
                })

                this.pricesAndServices = [...Items].sort((a,b) => a.order! - b.order!)
                
            } catch (error) {
                console.log(error)
            }
        },
        async AddPricesSectionItem(item: IServiceAndPrice) {
            const notify = useNotificationStore()
            try {
                const docRef = await addDoc(collection(db, "prices"), item)
                item.id = docRef.id
                this.pricesAndServices.push(item)
                notify.SetNofication("Success", "Prices item is successfully added", "success")
            } catch (error) {
                notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
            }
        },
        async deletePricesSectionItem(item: IServiceAndPrice) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "prices", item.id as string)
                deleteDoc(docRef).then(() => {
                    this.pricesAndServices = this.pricesAndServices.filter(s => s.id != item.id)
                    notify.SetNofication("Success", "Prices item is successfully deleted", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
            }
        },
        async updatePricesSectionItem(item: IServiceAndPrice) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "prices", item.id as string)
                    const data: Partial<IServiceAndPrice> = {
                        title: item.title,
                        exampleUrl: item.exampleUrl,
                        contentList: item.contentList,
                        services: item.services,
                        comment: item.comment
                    }
                updateDoc(docRef, data).then(() => {
                    this.pricesAndServices.forEach(s => {
                        if(s.id === item.id) {
                            s.title = item.title
                            s.exampleUrl = item.exampleUrl
                            s.services = item.services
                            s.contentList = item.contentList
                            s.comment = item.comment
                        }
                    })
                    notify.SetNofication("Success", "Service item is successfully updated", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error update service item. error: ${error}`, "error")
            }

        }, 

        async savePricesSectionItemsOrder() {
            let newOrder = 0
            for await (const item of this.pricesAndServices) {
                try {
                    const docRef = doc(db, "prices", item.id as string)
    
                    const data : Partial<IServiceAndPrice> = {
                        order: newOrder
                    }
                    
                   await updateDoc(docRef, data)

                   newOrder++
                } catch {

                }
            }
        },

         //Gallery SECTION
        async getGallerySectionItems() {
            try {
                const q = query(collection(db, "gallery"))
                const rezult = await getDocs(q)
                rezult.forEach((doc) => {
                    this.gallery.push({id: doc.id, ...doc.data()} as IGalleryImage) 
                })
                
            } catch (error) {
                console.log(error)
            }
        },
        async AddGallerySectionItem(item: IGalleryImage) {
            const notify = useNotificationStore()
            try {
                const docRef = await addDoc(collection(db, "gallery"), item)
                item.id = docRef.id
                this.gallery.push(item)
                notify.SetNofication("Success", "Image is successfully added", "success")
            } catch (error) {
                notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
            }
        },
        async deleteGallerySectionItem(item: IGalleryImage) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "gallery", item.id as string)
                deleteDoc(docRef).then(() => {
                    this.gallery = this.gallery.filter(s => s.id != item.id)
                    deleteFile(`images/gallery/${item.image.match('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')?.[0]}`)
                    notify.SetNofication("Success", "Image item is successfully deleted", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
            }
        },
      
        //Section TESTIMONIALS
        async getTestimonialSectionItems() {
            try {
                const q = query(collection(db, "testimonials"))
                const rezult = await getDocs(q)
                rezult.forEach((doc) => {
                    this.testimonials.push({id: doc.id, ...doc.data()} as ITestimonial) 
                })
                
            } catch (error) {
                console.log(error)
            }
        },
        async AddTestimonialSectionItem(item: ITestimonial) {
            const notify = useNotificationStore()
            try {
                const docRef = await addDoc(collection(db, "testimonials"), item)
                item.id = docRef.id
                this.testimonials.push(item)
                notify.SetNofication("Success", "Testimonial item is successfully added", "success")
            } catch (error) {
                notify.SetNofication("Error", `Error add service item. error: ${error}`, "error")
            }
        },
        async deleteTestimonialSectionItem(item: ITestimonial) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "testimonials", item.id as string)
                deleteDoc(docRef).then(() => {
                    this.testimonials = this.testimonials.filter(s => s.id != item.id)
                    notify.SetNofication("Success", "Testimonial item is successfully deleted", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error delete service item. error: ${error}`, "error")
            }
        },
        async updateTestimonialSectionItem(item: ITestimonial) {
            const notify = useNotificationStore()
            try {
                const docRef = doc(db, "testimonials", item.id as string)
                    const data: Partial<ITestimonial> = {
                        clientName: item.clientName,
                        jobTitle: item.jobTitle,
                        testimonial: item.testimonial
                    }
                updateDoc(docRef, data).then(() => {
                    this.testimonials.forEach(s => {
                        if(s.id === item.id) {
                            s.clientName = item.clientName
                            s.jobTitle = item.jobTitle
                            s.testimonial = item.testimonial
                        }
                    })
                    notify.SetNofication("Success", "Testimonial item is successfully updated", "success")
                })
            } catch (error) {
                notify.SetNofication("Error", `Error update service item. error: ${error}`, "error")
            }

        }, 

    }
})