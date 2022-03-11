<script setup>
import { useUser, useUserSendEmail } from '@/composables/user'

const router = useRouter()
const { rules, error, loading, userSignUp, editUserProfile } = useUser()
const { sendUserVerificationEmail } = useUserSendEmail()

const form = reactive({
  name: 'Sergio Dobri',
  email: 'sergiodobri@gmail.com',
  password: 'slD@123456'
})

const onSubmit = async () => {
  await userSignUp(form)
  if (!error.value) {
    loading.value = true
    editProfile(form)
  }
}

const editProfile = async (user) => {
  await editUserProfile({ diaplayName: user.name })
  if (!error.value) {
    loading.value = true
    sendEmailVerification()
  }
}

const sendEmailVerification = async () => {
  await sendUserVerificationEmail()
  router.push('/signIn')
}
</script>

<template>
  <page>
    <page-header>
      <template #title>Crie sua Conta</template>
    </page-header>

    <page-body>
      <div class="q-px-md q-py-sm q-mt-md bg-white" style="border-radius: 12px">
        <q-form @submit="onSubmit">
          <!-- name -->
          <text-field
            v-model.trim="form.name"
            label="Nome e Sobrenome"
            placeholder="Informe seu nome e seu sobrenome"
            :required="true"
            :rules="[rules.isRequired(), rules.onlyNameAndLastname()]"
          />

          <!-- email -->
          <email-field
            v-model.trim="form.email"
            type="email"
            label="Email"
            placeholder="Informe seu email"
            :required="true"
            :rules="[rules.isRequired(), rules.isValidEmail()]"
          />

          <!-- password -->
          <password-field
            v-model.trim="form.password"
            label="Senha de acesso"
            placeholder="Informe sua senha de acesso"
            :required="true"
            :rules="[
              rules.isRequired(),
              rules.atLeastOneUpperCase(),
              rules.atLeastOneLowerCase(),
              rules.atLeastOneDigit(),
              rules.atLeastOneSpecialCharacter(),
              rules.minLength(8),
              rules.maxLength(30)
            ]"
          />

          <!-- Use Term -->
          <div class="q-py-md text-body2 text-weight-medium text-blue-grey-5">
            Ao pressionar o botão criar conta você afirma que leu e que concorda com os nossos&nbsp;
            <router-link class="text-primary text-no-wrap" to="/terms">Termo de Uso</router-link>
          </div>

          <!-- submit -->
          <div class="row justify-center">
            <btn
              unelevated
              color="primary"
              label="CRIAR CONTA"
              type="submit"
              class="full-width"
              :loading="loading"
              :disable="loading"
            />
          </div>

          <!-- go to login -->
          <div class="q-py-md text-body2 text-center full-width text-weight-medium text-blue-grey-5">
            <div>Já tem uma conta:</div>
            <router-link class="text-weight-bold text-uppercase text-no-wrap text-primary" to="/signin">
              Faça seu Login
            </router-link>
          </div>
        </q-form>
      </div>
      <!-- -- -->
    </page-body>
  </page>
</template>
