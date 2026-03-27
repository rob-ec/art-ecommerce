<script setup lang="ts">
import segurityIcon from '@/assets/icons/security-icon.svg'
import fraudProtectionIcon from '@/assets/icons/fraud-protection-icon.svg'
import insuredShippingIcon from '@/assets/icons/insured-shipping-icon.svg'
import creditCardIcon from '@/assets/icons/credit-card-icon.svg'
import qrCodeIcon from '@/assets/icons/qr-code-icon.svg'
import codeBarIcon from '@/assets/icons/code-bar-icon.svg'
import SectionStandard from './SectionStandard.vue'
import CartItemComponent from './CartItemComponent.vue'
import { computed, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { formatCurrency } from '@/utils/formatCurrency'

const form = reactive({
  nome: '',
  sobrenome: '',
  endereco: '',
  cep: '',
  cidade: '',
  pagamento: '',
})

const cartStore = useCartStore()

const {
  list: productList,
  totalInCart,
  totalAmount,
  totalAmountWithDiscount,
  economy,
} = storeToRefs(cartStore)

const totalPrice = computed(() => formatCurrency(totalAmount.value))
const finalPrice = computed(() => formatCurrency(totalAmountWithDiscount.value))
const economyPrice = computed(() => formatCurrency(economy.value))

import type { Product } from '@/model/Product'

function addItem(product: Product) {
  cartStore.add(product)
}

function removeItem(product: Product) {
  cartStore.remove(product)
}

function deleteItem(product: Product) {
  cartStore.delete(product)
}

function handleSubmit() {
  if (productList.value.length === 0) {
    alert('Carrinho vazio')
    return
  }

  console.log({
    customer: form,
    items: productList.value,
    total: totalAmountWithDiscount.value,
  })
}

function formatCardNumber(event: Event) {
  const input = event.target as HTMLInputElement

  let value = input.value.replace(/\D/g, '')

  value = value.replace(/(.{4})/g, '$1 ').trim()

  input.value = value
}

function formatCardDate(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')

  if (value.length >= 3) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4)
  }

  input.value = value
}

function formatCVV(event: Event) {
  const input = event.target as HTMLInputElement
  input.value = input.value.replace(/\D/g, '')
}
</script>

<template>
  <main class="py-[64px] gap-[24px] px-30.5 items-center">
    <header class="pt-24">
      <SectionStandard title="Chekout" />
    </header>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-8 text-palette-green">
      <div class="grid grid-cols-2 gap-4 items-center">
        <section class="flex flex-col gap-[32px]">
          <section>
            <header>
              <h2 class="text-2xl font-bold">Endereço de Entrega</h2>
              <p>Onde devemos entregar seus itens?</p>
            </header>
            <fieldset class="flex flex-col gap-4 mt-4">
              <legend class="sr-only">Dados de entrega</legend>

              <div class="flex gap-4">
                <div class="flex flex-col w-full">
                  <label for="nome">Nome</label>
                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    placeholder="ex.: João"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label for="sobrenome">Sobrenome</label>
                  <input
                    id="sobrenome"
                    v-model="form.sobrenome"
                    type="text"
                    placeholder="ex.: da Silva"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>
              </div>

              <div class="flex flex-col w-full">
                <label for="endereco">Endereço</label>
                <input
                  id="endereco"
                  v-model="form.endereco"
                  type="text"
                  placeholder="ex.: Rua dos Bobos, 1234"
                  class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                />
              </div>

              <div class="flex gap-4">
                <div class="flex flex-col w-full">
                  <label for="cep">CEP</label>
                  <input
                    id="cep"
                    v-model="form.cep"
                    type="text"
                    inputmode="numeric"
                    placeholder="ex.: 00000-00"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label for="cidade">Cidade</label>
                  <input
                    id="cidade"
                    v-model="form.cidade"
                    type="text"
                    placeholder="ex.: São Paulo"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>
              </div>
            </fieldset>
          </section>

          <section>
            <header>
              <h2 class="text-2xl font-bold">Método de Pagamento</h2>
              <p>Selecione sua maneira preferida de concluir a compra.</p>
            </header>

            <fieldset class="flex flex-col gap-4 mt-4">
              <legend class="sr-only">Pagamento</legend>

              <label
                for="cartao"
                class="flex items-center gap-4 bg-palette-white rounded-[16px] p-4 cursor-pointer border border-solid border-palette-gray hover:border-palette-brown"
              >
                <input type="radio" value="cartao" v-model="form.pagamento" />

                <div class="flex flex-col gap-2 w-full">
                  <div class="flex flex-row items-center justify-between">
                    <span>Cartão de Crédito</span>
                    <img :src="creditCardIcon" alt="" />
                  </div>
                  <div class="flex flex-col gap-4">
                    <input
                      id="numero-cartao"
                      type="text"
                      inputmode="numeric"
                      maxlength="19"
                      placeholder="0000 0000 0000 0000"
                      class="input bg-palette-cream p-[14px] rounded-[8px] outline-none w-full"
                      @input="formatCardNumber"
                    />

                    <div class="flex gap-4">
                      <input
                        id="validade"
                        type="text"
                        placeholder="MM/YY"
                        maxlength="5"
                        class="input bg-palette-cream w-full p-[14px] rounded-[8px] outline-none"
                        @input="formatCardDate"
                      />

                      <input
                        id="cvv"
                        type="text"
                        inputmode="numeric"
                        maxlength="4"
                        placeholder="CVV"
                        class="input bg-palette-cream w-full p-[14px] rounded-[8px] outline-none"
                        @input="formatCVV"
                      />
                    </div>
                  </div>
                </div>
              </label>

              <label
                for="pix"
                class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer border border-solid border-palette-cream-dark hover:border-palette-brown"
              >
                <input type="radio" value="pix" v-model="form.pagamento" />

                <div class="flex flex-row gap-2 w-full justify-between">
                  <span>PIX</span>
                  <img :src="qrCodeIcon" alt="" />
                </div>
              </label>

              <label
                for="boleto"
                class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer border border-solid border-palette-cream-dark hover:border-palette-brown"
              >
                <input type="radio" value="boleto" v-model="form.pagamento" />

                <div class="flex flex-row gap-2 w-full justify-between">
                  <span>Boleto Bancário</span>
                  <img :src="codeBarIcon" alt="" />
                </div>
              </label>

              <div
                class="flex flex-row gap-4 bg-palette-white opacity-50 border border-palette-brown rounded-[16px] p-4 justify-between"
              >
                <div class="flex flex-row gap-2">
                  <img :src="segurityIcon" alt="" />
                  <span>Compra segura</span>
                </div>
                <div class="flex flex-row gap-2">
                  <img :src="fraudProtectionIcon" alt="" />
                  <span>Proteção contra fraudes</span>
                </div>
                <div class="flex flex-row gap-2">
                  <img :src="insuredShippingIcon" alt="" />
                  <span>Envio seguro</span>
                </div>
              </div>
            </fieldset>
          </section>
        </section>

        <aside
          class="flex flex-col gap-4 justify-between bg-palette-white text-palette-green rounded-[16px] p-6 h-fit border border-palette-gray hover:border-palette-brown"
        >
          <header>
            <h2 class="text-2xl font-bold">Resumo do Pedido</h2>
          </header>
          <main class="flex flex-col gap-4 w-full">
            <CartItemComponent
              v-for="item in productList"
              :key="item.product._id"
              :cartItem="item"
              @add-item="addItem(item.product)"
              @remove-item="removeItem(item.product)"
              @delete-item="deleteItem(item.product)"
            />
            <hr class="border-palette-gray" />
            <div class="flex flex-col gap-[16px]">
              <div class="flex justify-between">
                <span class="text-sm">Itens:</span>
                <span class="text-sm">{{ totalInCart }}</span>
              </div>
              <hr class="border-palette-gray" />
              <div class="flex justify-between">
                <span class="text-sm">Subtotal:</span>
                <span class="text-sm">{{ totalPrice }}</span>
              </div>
              <hr class="border-palette-gray" />
              <div class="flex justify-between">
                <span class="text-sm">Desconto:</span>
                <span class="text-sm">{{ economyPrice }}</span>
              </div>
              <hr class="border-palette-gray" />
              <div class="flex justify-between">
                <span class="text-sm">Total:</span>
                <span class="text-sm font-bold text-palette-orange">{{ finalPrice }}</span>
              </div>
            </div>
          </main>
          <footer v-if="productList.length > 0" class="flex flex-col gap-4 mt-4">
            <button
              type="submit"
              class="bg-palette-green text-palette-white font-bold p-[14px] rounded-[16px] w-full text-center hover:bg-palette-green/90 transition-colors"
            >
              Completar Pedido
            </button>

            <p class="text-xs text-center">
              Ao prosseguir com a compra, você declara que leu e concorda com nossos Termos de Uso e
              Política de Privacidade.
            </p>
          </footer>
          <div
            v-if="productList.length === 0"
            class="text-center text-palette-orange flex flex-col items-center gap-4"
          >
            <p>
              Seu carrinho está vazio 😕<br />
              Adicione produtos para continuar
            </p>

            <RouterLink
              to="/products"
              class="bg-palette-green text-white font-bold px-6 py-3 rounded-[16px] hover:bg-palette-green/90 transition w-full"
            >
              Voltar para loja
            </RouterLink>
          </div>
        </aside>
      </div>
    </form>
  </main>
</template>
