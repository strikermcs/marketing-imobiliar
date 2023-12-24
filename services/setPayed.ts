import { collection, doc, getDocs, query, updateDoc } from "firebase/firestore"
import { db } from "~/libs/firebase"
import type { IMail, IOrderMail } from "~/types"


export const setMailOrderIsPayed = async (invoiceId: string ) => {
    const mailsTemp: IMail<IOrderMail>[] = []
    try {
        const q = query(collection(db, "mails"))
        const rezult = await getDocs(q)

        rezult.forEach((doc) => {
            mailsTemp.push({id: doc.id, ...doc.data()} as IMail<IOrderMail>) 
        })

        const mail = mailsTemp.find(m => m.mail.invoiceId == invoiceId)

        if(mail) {
            const docRef = doc(db, "mails", mail.id as string)

            const data: Partial<IMail<Partial<IOrderMail>>> = {
                mail: {
                    isPay: true
                }
            }

            updateDoc(docRef, data).then(() => {
                
            })
        }
    } catch (error) {
        
    }
}