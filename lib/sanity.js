import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '2yny5iuh', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2025-02-19', // use a UTC date string
  useCdn: true // `false` if you want to ensure fresh data
})
