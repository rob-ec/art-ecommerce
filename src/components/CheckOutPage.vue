<script setup lang="ts">
import segurityIcon from '@/assets/imgs/svg/security-icon.svg'
import fraudProtectionIcon from '@/assets/imgs/svg/fraud-protection-icon.svg'
import insuredShippingIcon from '@/assets/imgs/svg/insured-shipping-icon.svg'
</script>

<template>
  <main class="grid grid-cols-2 py-[64px] gap-[24px] px-30.5 items-center">
    <form class="flex flex-col gap-8 text-palette-black">
      <section>
        <header class="pt-24">
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
                class="bg-palette-white rounded-[8px] p-[18px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
              />
            </div>

            <div class="flex flex-col w-full">
              <label for="sobrenome">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                placeholder="ex.: da Silva"
                class="bg-palette-white rounded-[8px] p-[18px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <label for="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              placeholder="ex.: Rua dos Bobos, 1234"
              class="bg-palette-white rounded-[8px] p-[18px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
            />
          </div>

          <div class="flex flex-col">
            <label for="cep">CEP</label>
            <input
              id="cep"
              type="number"
              placeholder="ex.: 000000000-00"
              class="bg-palette-white rounded-[8px] p-[18px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
            />
          </div>

          <div class="flex flex-col">
            <label for="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              placeholder="ex.: São Paulo"
              class="bg-palette-white rounded-[8px] p-[18px] w-full input border border-solid border-palette-gray hover:border-palette-brown outline-none"
            />
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
              <span>Cartão de Crédito</span>

              <input
                id="numero-cartao"
                type="text"
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
                  type="text"
                  placeholder="CVV"
                  class="input bg-palette-cream w-full p-[14px] rounded-[8px] outline-none w-full"
                />
              </div>
            </div>
          </label>

          <label
            for="pix"
            class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer"
          >
            <input type="radio" name="pagamento" id="pix" />

            <div class="flex flex-col gap-2 w-full">
              <span>PIX</span>
            </div>
          </label>

          <label
            for="boleto-bancario"
            class="flex items-center gap-4 bg-palette-cream rounded-[16px] p-4 cursor-pointer"
          >
            <input type="radio" name="pagamento" id="boleto-bancario" />

            <div class="flex flex-col gap-2 w-full">
              <span>Boleto Bancário</span>
            </div>
          </label>

          <div
            class="flex flex-row gap-4 bg-palette-white opacity-20 border border-palette-brown rounded-[16px] p-4"
          >
            <div class="flex flex-row gap-2">
              <img :src="segurityIcon" alt="" />
              <span>SSL Secure</span>
            </div>
            <div class="flex flex-row gap-2">
              <img :src="fraudProtectionIcon" alt="" />
              <span>Fraud Protection</span>
            </div>
            <div class="flex flex-row gap-2">
              <img :src="insuredShippingIcon" alt="" />
              <span>Insured Shipping</span>
            </div>
          </div>
        </fieldset>
      </section>
    </form>

    <aside
      class="bg-palette-white text-palette-black rounded-[16px] p-6 h-fit border border-palette-gray border-solid"
    >
      <header class="pt-24">
        <h2 class="text-2xl font-bold">Resumo do Pedido</h2>
      </header>
      <footer class="flex flex-col gap-4 mt-4 ite">
        <a
          href="#"
          class="bg-palette-brown text-palette-white p-[20px] rounded-4xl w-full text-center"
          >Completar Pedido</a
        >
        <p class="text-xs">
          Ao clicar, você concorda com nossos Termos de Uso e Política de Privacidade.
        </p>
      </footer>
    </aside>
  </main>
</template>
