<script setup lang="ts">
import segurityIcon from '@/assets/imgs/svg/security-icon.svg'
import fraudProtectionIcon from '@/assets/imgs/svg/fraud-protection-icon.svg'
import insuredShippingIcon from '@/assets/imgs/svg/insured-shipping-icon.svg'
import creditCardIcon from '@/assets/imgs/svg/credit-card-icon.svg'
import qrCodeIcon from '@/assets/imgs/svg/qr-code-icon.svg'
import codeBarIcon from '@/assets/imgs/svg/code-bar-icon.svg'
import SectionStandard from './SectionStandard.vue'
</script>

<template>
  <main class="py-[64px] gap-[24px] px-30.5 items-center">
    <header class="pt-24">
      <SectionStandard title="Chekout" />
    </header>
    <form class="flex flex-col gap-8 text-palette-black">
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
                    type="text"
                    placeholder="ex.: João"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label for="sobrenome">Sobrenome</label>
                  <input
                    id="sobrenome"
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
                    type="number"
                    placeholder="ex.: 000000000-00"
                    class="bg-palette-white rounded-[8px] p-[14px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
                  />
                </div>

                <div class="flex flex-col w-full">
                  <label for="cidade">Cidade</label>
                  <input
                    id="cidade"
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
                <input type="radio" name="pagamento" id="cartao" />

                <div class="flex flex-col gap-2 w-full">
                  <div class="flex flex-row items-center justify-between">
                    <span>Cartão de Crédito</span>
                    <img :src="creditCardIcon" alt="" />
                  </div>
                  <div class="flex flex-col gap-4">
                    <input
                      id="numero-cartao"
                      type="number"
                      placeholder="Número do cartão"
                      class="input bg-palette-cream p-[14px] rounded-[8px] outline-none w-full"
                    />

                    <div class="flex gap-4">
                      <input
                        id="validade"
                        type="date"
                        placeholder="MM/YY"
                        class="input bg-palette-cream w-full p-[14px] rounded-[8px] outline-none w-full"
                      />

                      <input
                        id="cvv"
                        type="number"
                        placeholder="CVV"
                        class="input bg-palette-cream w-full p-[14px] rounded-[8px] outline-none w-full"
                      />
                    </div>
                  </div>
                </div>
              </label>

              <label
                for="pix"
                class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer border border-solid border-palette-cream-dark hover:border-palette-brown"
              >
                <input type="radio" name="pagamento" id="pix" />

                <div class="flex flex-row gap-2 w-full justify-between">
                  <span>PIX</span>
                  <img :src="qrCodeIcon" alt="" />
                </div>
              </label>

              <label
                for="boleto-bancario"
                class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer border border-solid border-palette-cream-dark hover:border-palette-brown"
              >
                <input type="radio" name="pagamento" id="boleto-bancario" />

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
          class="flex flex-col gap-4 justify-between bg-palette-white text-palette-black rounded-[16px] p-6 h-fit border border-palette-gray border-solid border border-solid border-palette-cream-dark hover:border-palette-brown"
        >
          <header>
            <h2 class="text-2xl font-bold">Resumo do Pedido</h2>
          </header>
          <main class="flex flex-col gap-4 w-full">
            <article class="flex flex-row items-center gap-[16px] w-full">
              <div class="bg-palette-gray w-36 h-36 rounded-[8px]">
                <img src="#" alt="" />
              </div>
              <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-row justify-between">
                  <p>Nome do Produto</p>
                  <p>R$ 100,00</p>
                </div>
                <div class="flex flex-row items-center gap-2">
                  <button
                    class="border border-solid border-palette-gray rounded-4xl px-4 py-2 hover:border-palette-brown"
                  >
                    -
                  </button>
                  <p class="px-2 py-2">1</p>
                  <button
                    class="border border-solid border-palette-gray rounded-4xl px-4 py-2 hover:border-palette-brown"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
            <hr class="border-palette-gray" />
            <article class="flex flex-row items-center gap-[16px] w-full">
              <div class="bg-palette-gray w-36 h-36 rounded-[8px]">
                <img src="#" alt="" />
              </div>
              <div class="flex flex-col gap-2 w-full">
                <div class="flex flex-row justify-between">
                  <p>Nome do Produto</p>
                  <p>R$ 200,00</p>
                </div>
                <div class="flex flex-row items-center gap-2">
                  <button
                    class="border border-solid border-palette-gray rounded-4xl px-4 py-2 hover:border-palette-brown"
                  >
                    -
                  </button>
                  <p class="px-2 py-2">2</p>
                  <button
                    class="border border-solid border-palette-gray rounded-4xl px-4 py-2 hover:border-palette-brown"
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
            <hr class="border-palette-gray" />
            <div class="flex flex-col gap-[16px]">
              <div class="flex justify-between">
                <p>Subtotal:</p>
                <p>Calculando...</p>
              </div>
              <div class="flex justify-between">
                <p>Desconto:</p>
                <p>Calculando...</p>
              </div>
              <div class="flex justify-between">
                <p>Frete:</p>
                <p>Calculando...</p>
              </div>
              <div class="flex justify-between">
                <p>Estimativa de entrega:</p>
                <p>Calculando...</p>
              </div>
              <hr class="border-palette-gray" />
              <div class="flex justify-between">
                <p class="text-lg">Total:</p>
                <p class="text-lg font-bold">Calculando...</p>
              </div>
            </div>
          </main>
          <footer class="flex flex-col gap-4 mt-4 ite">
            <button
              type="submit"
              class="bg-palette-brown text-palette-white p-[14px] rounded-[16px] w-full text-center hover:bg-palette-green"
            >
              Completar Pedido
            </button>
            <p class="text-xs text-center">
              Ao prosseguir com a compra, você declara que leu e concorda com nossos Termos de Uso e
              Política de Privacidade.
            </p>
          </footer>
        </aside>
      </div>
    </form>
  </main>
</template>
