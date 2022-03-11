<script setup>
import { getAuth } from 'firebase/auth'
import { useUser, useUserSendEmail } from '@/composables/user'

const router = useRouter()
const { rules, error, loading, userSignIn, userSignOut } = useUser()
const { sendError, sendUserVerificationEmail } = useUserSendEmail()

const form = reactive({
  email: 'sergiodobri@gmail.com',
  password: 'slD@123456'
})

const sendEmailVerification = async () => {
  await sendUserVerificationEmail()
  if (!sendError.value) router.push('/signIn')
}

const onSubmit = async () => {
  await userSignIn(form)
  if (!error.value) {
    loading.value = true
    const auth = getAuth()
    if (!auth.currentUser.emailVerified) return sendEmailVerification()
    router.push('/home')
    loading.value = false
  }
}

onMounted(() => userSignOut())
</script>

<template>
  <q-form @submit="onSubmit">
    <page>
      <page-header>
        <template #title>Faça seu Login</template>
      </page-header>
      <page-body>
        <div class="box">
          <!-- email -->
          <text-field
            v-model.trim="form.email"
            type="email"
            label="Email*"
            placeholder="Informe seu email"
            :rules="[rules.isRequired(), rules.isValidEmail()]"
          />

          <!-- password -->
          <password-field
            v-model.trim="form.password"
            label="Senha de acesso*"
            placeholder="Informe sua senha de acesso"
            :rules="[rules.isRequired()]"
          />

          <!-- submit -->
          <div class="row justify-center q-mt-lg">
            <btn
              unelevated
              color="primary"
              label="ENTRAR"
              type="submit"
              class="full-width"
              :loading="loading"
              :disable="loading"
            />
          </div>

          <!-- go to register -->
          <div class="q-py-md text-body2 text-center full-width text-weight-medium text-blue-grey-5">
            <div>Não tem uma conta:</div>
            <router-link class="text-weight-bold text-uppercase text-no-wrap text-primary" to="/signup">
              Crie sua Conta
            </router-link>
          </div>
        </div>
        <!-- -- -->
      </page-body>
    </page>
  </q-form>
</template>
