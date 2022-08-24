import { defineNuxtPlugin } from '#app'
import awsExports from '../aws-exports'
import { Amplify } from '@aws-amplify/core'

export default defineNuxtPlugin(() => {
  Amplify.configure({ ...awsExports, ssr: true })
})
