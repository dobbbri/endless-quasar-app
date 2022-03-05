<script setup>
import { useStore } from 'src/stores'

const store = useStore()

const menuItems = ref([
  { title: 'Ponto de Venda', caption: 'Venda Rápida', icon: 'far fa-cash-register', route: '/sales' },
  {
    title: 'Métodos de Pagamento',
    caption: 'Cadastro dos Métodos de Pagamentos',
    icon: 'fas fa-badge-dollar',
    route: '/paymentMethods'
  },
  { title: 'Categorias', caption: 'Cadastro das Categorias', icon: 'far fa-tags', route: '/categories' },
  { title: 'Produtos', caption: 'Cadastro dos Produtos', icon: 'fas fa-box', route: '/products' },
  { title: 'Serviços', caption: 'Cadastro de Serviços', icon: 'far fa-tools', route: '/products' },
  { title: 'Clientes', caption: 'Cadastro de Clientes', icon: 'far fa-users', route: '/customers' },
  { title: 'Configurações', caption: 'Configurações do aplicativo', icon: 'far fa-cog', route: '/settings' },
  { title: 'Sair', icon: 'far fa-power-off', route: '/signIn' }
])
</script>

<template>
  <div>
    <q-drawer v-model="store.isSidebarOpen" show-if-above bordered>
      <list class="q-px-md q-py-sm" style="border-bottom: 1px solid">
        <item class="justify-between" style="opacity: 1" to="/categories">
          <item-section avatar>
            <q-avatar size="lg" class="bg-white">
              <img src="/src/assets/images/logo.svg" />
            </q-avatar>
          </item-section>
          <item-section avatar>
            <btn-forward />
          </item-section>
        </item>
        <item to="/categories">
          <item-section>
            <item-section-label class="text-weight-medium">Sergio Dobri</item-section-label>
            <item-section-label caption>sergiodobri@gmail.com</item-section-label>
          </item-section>
        </item>
      </list>

      <q-scroll-area style="height: calc(100% - 120px)">
        <list>
          <item v-for="(item, index) in menuItems" :key="index" :to="item.route" class="q-mb-xs">
            <item-section v-if="item.icon" avatar>
              <icon :name="item.icon" size="sm" class="q-pl-md" />
            </item-section>
            <item-section>
              <item-section-label class="text-weight-medium">{{ item.title }}</item-section-label>
              <item-section-label v-if="item.caption" caption style="margin-top: -1px">
                {{ item.caption }}
              </item-section-label>
            </item-section>
          </item>
        </list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>
