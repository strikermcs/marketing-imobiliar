import { EuPlatesc } from 'euplatesc'

const epClient = new EuPlatesc({
    merchantId: '44841002683',
    secretKey: '4ADECFE8B5CA4265CFBC5D5AEACE5897A1E0899F',
    testMode: false,
    userKey: '17600',
    userApi: 'a406cad0136b4695051d0dada4cb64668c7d6994'
})

export default epClient