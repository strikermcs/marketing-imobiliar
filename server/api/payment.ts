import epClient from '../../libs/epClient'
import axios from 'axios'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const price: number = parseInt(body.amount.toFixed(2))
    const data = {
        amount: price,
        currency: 'RON',
        invoiceId: body.invoiceId,
        orderDescription: body.text || "Payment description",
        billingFirstName: body.firstname,
        billingPhone: body.phone,
        billingEmail: body.email
     }

    const result = await axios(epClient.paymentUrl(data as any).paymentUrl) 
    
      
    const str = result.data
    const links = str.match(/https:\/\/[^\s\Z]+/i)
    const link = links[0].slice(0, -2)

    return link
})