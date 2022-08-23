import { defineNuxtPlugin } from '#app'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'

export default defineNuxtPlugin(() => {
  Amplify.configure({ ...awsExports, ssr: true })
})
