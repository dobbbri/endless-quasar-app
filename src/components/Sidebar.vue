<script setup>
import {
  ionBasketOutline,
  ionPricetagOutline,
  ionCubeOutline,
  ionConstructOutline,
  ionPeopleOutline,
  ionSettingsOutline,
  ionPower
} from '@quasar/extras/ionicons-v6'

const store = inject('store')

const menuItems = ref([
  { title: 'Ponto de Venda', caption: 'Venda Rápida', icon: ionBasketOutline, route: '/sales' },
  { title: 'Categorias', caption: 'Cadastro das Categorias', icon: ionPricetagOutline, route: '/categories' },
  { title: 'Produtos', caption: 'Cadastro dos Produtos', icon: ionCubeOutline, route: '/products' },
  { title: 'Serviços', caption: 'Cadastro de Serviços', icon: ionConstructOutline, route: '/products' },
  { title: 'Clientes', caption: 'Cadastro de Clientes', icon: ionPeopleOutline, route: '/customers' },
  { title: 'Configurações', icon: ionSettingsOutline, caption: 'Configurações do aplicativo', route: '/settings' },
  { title: 'Sair', icon: ionPower, route: '/signIn' }
])
</script>

<template>
  <div>
    <q-drawer v-model="store.isSidebarOpen" show-if-above bordered>
      <list class="q-py-sm" style="border-bottom: 1px solid">
        <item class="row" :clickable="false">
          <item-section avatar class="q-pl-md">
            <q-avatar size="lg" class="bg-white">
              <img src="/src/assets/images/logo.svg" />
            </q-avatar>
          </item-section>
          <q-space />
          <item-section avatar>
            <btn-forward to="/categories" />
          </item-section>
        </item>
        <item :clickable="false">
          <item-section class="q-pl-md">
            <item-section-label class="text-weight-medium" to="/categories">Sergio Dobri</item-section-label>
            <item-section-label caption>sergiodobri@gmail.com</item-section-label>
          </item-section>
        </item>
      </list>

      <q-scroll-area style="height: calc(100% - 120px)">
        <list>
          <item v-for="(item, index) in menuItems" :key="index" :to="item.route" class="q-mb-xs">
            <item-section v-if="item.icon" avatar>
              <icon :name="item.icon" size="md" class="q-pl-md" />
            </item-section>
            <item-section>
              <item-section-label class="text-weight-medium">{{ item.title }}</item-section-label>
              <item-section-label
                v-if="item.caption"
                caption
                style="margin-top: -1px"
              >{{ item.caption }}</item-section-label>
            </item-section>
          </item>
        </list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>
