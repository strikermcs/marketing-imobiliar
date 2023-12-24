import epClient from '../../libs/epClient'
import { setMailOrderIsPayed } from '../../services/setPayed'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
   
    const params = {
        amount: body.amount,
        currency: body.curr,
        invoiceId: body.invoice_id,
        epId: body.ep_id,
        merchantId: body.merch_id,
        action: body.action,
        message: body.message,
        approval: body.approval,
        timestamp: body.timestamp,
        nonce: body.nonce,
        fpHash: body.fp_hash
    }
    
    const result = epClient.checkResponse(params)

    if(result.success) {
        await sendRedirect(event, '/payment_success')
    } else {
        await sendRedirect(event, '/payment_error')
        await setMailOrderIsPayed(params.invoiceId)
    }  
})