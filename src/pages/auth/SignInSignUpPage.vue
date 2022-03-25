<script setup>
import { getAuth } from 'firebase/auth'
import { useUser, useUserSendEmail } from '@/composables/user'

const router = useRouter()

const { rules, error, loading, userSignUp, userSignIn, userSignOut } = useUser()
const { sendUserVerificationEmail } = useUserSendEmail()

const form = reactive({
  email: 'sergiodobri@gmail.com',
  password: 'slD@123456'
})

const isSignIn = ref(true)
const buttonTitle = ref('ENTRAR')
const pageTitle = ref('Faça seu Login')

watch(
  () => isSignIn.value,
  () => {
    buttonTitle.value = isSignIn.value ? 'ENTRAR' : 'CRIAR CONTA'
    pageTitle.value = isSignIn.value ? 'Faça seu Login' : 'Crie sua Conta'
  }
)

const toggle = () => (isSignIn.value = !isSignIn.value)

const onSubmit = async () => {
  if (isSignIn.value) {
    await userSignIn(form)
    if (!error.value) {
      loading.value = true
      const auth = getAuth()
      if (!auth.currentUser.emailVerified) return sendEmailVerification()
      router.push('/home')
      loading.value = false
    }
  } else {
    await userSignUp(form)
    if (!error.value) {
      loading.value = true
      sendEmailVerification()
    }
  }
}

const sendEmailVerification = async () => {
  await sendUserVerificationEmail()
  router.push('/signIn')
}

onMounted(() => userSignOut())
</script>

<template>
  <page>
    <page-header>
      <template #title>{{ pageTitle }}</template>
    </page-header>

    <page-body class="bg-white">
      <q-avatar
        size="120px"
        class="bg-white q-mt-xl q-mx-auto full-width"
      >
        <img src="/src/assets/images/logo.svg" />
      </q-avatar>

      <expansion-box
        :expanded="true"
        :no-header="true"
      >
        <q-form @submit="onSubmit">
          <!-- email -->
          <text-field
            v-model.trim="form.email"
            type="email"
            label="Email"
            title="Informe seu email"
            :rules="[rules.isRequired(), rules.isValidEmail()]"
          />

          <!-- password -->
          <password-field
            v-model.trim="form.password"
            label="Senha de acesso"
            title="Informe sua senha de acesso"
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
          <div
            v-if="!isSignIn"
            class="q-py-md text-body2 text-center text-weight-medium text-blue-grey-5"
          >
            Ao pressionar o botão criar conta você afirma que leu e que concorda com os nossos&nbsp;
            <router-link
              class="text-primary text-no-wrap"
              to="/terms"
              >Termo de Uso</router-link
            >
          </div>

          <!-- submit -->
          <div class="row justify-center">
            <btn
              unelevated
              color="primary"
              :label="buttonTitle"
              type="submit"
              class="full-width"
              :loading="loading"
              :disable="loading"
            />
          </div>

          <!-- go to -->
          <div class="q-py-md text-body2 text-center full-width text-weight-medium text-blue-grey-5">
            <div v-if="isSignIn">
              Não tem uma conta:
              <br />
              <q-btn
                flat
                label="Crie sua Conta"
                class="text-primary"
                @click="toggle"
              />
            </div>

            <div v-else>
              Já tem uma conta:
              <br />
              <q-btn
                flat
                label="Faça seu Login"
                class="text-primary"
                @click="toggle"
              />
            </div>
          </div>
          <!-- -- -->
        </q-form>
      </expansion-box>
      <!-- -- -->
    </page-body>
  </page>
</template>
