import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#imports'
import awsExports from '../aws-exports'
import { Amplify } from '@aws-amplify/core'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  Amplify.configure({
    aws_project_region: config.region,
    aws_cognito_identity_pool_id: config.cognitoIdentityUserPoolId,
    aws_cognito_region: config.region,
    aws_user_pools_id: config.userPoolId,
    aws_user_pools_web_client_id: config.userPoolWebClientId,
    oauth: {},
    aws_cognito_username_attributes: [config.cognitoAttr],
    aws_cognito_social_providers: [],
    aws_cognito_signup_attributes: [config.cognitoAttr],
    aws_cognito_mfa_configuration: config.cognitoMfaConf,
    aws_cognito_mfa_types: [config.cognitoMfaType],
    aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: config.cognitoPasswordLength,
      passwordPolicyCharacters: [],
    },
    aws_cognito_verification_mechanisms: [config.cognitoAttr],
    aws_appsync_graphqlEndpoint: config.appSyncEndPoint,
    aws_appsync_region: config.region,
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: config.appSyncApiKey,
  })
})
