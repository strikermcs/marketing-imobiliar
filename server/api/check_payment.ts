import epClient from '../../libs/epClient'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    await sendRedirect(event, '/payment_success')
})