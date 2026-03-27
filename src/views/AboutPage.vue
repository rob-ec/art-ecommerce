<script setup lang="ts">
import { LinkedinIcon, GithubIcon } from 'lucide-vue-next'
import SectionStandard from '@/components/SectionStandard.vue'

interface Membro {
  nome: string
  foto: string
  linkedin: string
  github: string
}

const membros: Membro[] = [
  {
    nome: 'Gabriel Gurgel',
    foto: 'https://avatars.githubusercontent.com/u/261504748?v=4',
    linkedin: 'https://www.linkedin.com/in/gabriel-gurgel-b857541a1/',
    github: 'https://github.com/gabrielgurgel7',
  },
  {
    nome: 'Robson Gomes',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQEtTJjd-s1Oyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728751208248?e=1776297600&v=beta&t=f5QilR9A4JsQR_p9SaF3Uq84CI-5Oe6xCmtyXNDmcqA',
    linkedin: 'https://www.linkedin.com/in/robson-m-gomes/',
    github: 'https://github.com/rob-ec',
  },
  {
    nome: 'Vinicius Braga',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQH8ewMhF7F_QA/profile-displayphoto-shrink_400_400/B4DZTtuJM0HAAg-/0/1739155084985?e=1776297600&v=beta&t=mEPnf-Qmi9X-xy7nex8HTYXzFcab-7R7GBxan2EqVXU',
    linkedin: 'https://www.linkedin.com/in/viníciusbragaamaral/',
    github: 'https://github.com/AMARAL1777',
  },
]
</script>

<template>
  <main class="py-16 px-30.5 py-[100px]">
    <!-- PROBLEMA / PERFIL / SOLUÇÃO -->
    <section
      class="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-palette-orange bg-palette-cream rounded-[16px] py-[16px]"
    >
      <article class="px-[16px] space-y-4">
        <h2 class="text-palette-orange text-3xl uppercase">Problema</h2>
        <p class="text-palette-brown text-base leading-relaxed">
          Apesar da relevância na economia do país, muitos artesãos enfrentam dificuldades para
          expandir seus negócios. A comercialização ainda depende, em grande parte, de feiras
          presenciais, encomendas locais e turismo, o que limita o alcance dos produtos. Além disso,
          o uso de tecnologias digitais e plataformas de venda online ainda é um desafio para muitos
          desses profissionais, seja por falta de conhecimento técnico, falta de recursos ou
          dificuldade de adaptação às ferramentas disponíveis.
        </p>
      </article>

      <article class="px-[16px] space-y-4">
        <h2 class="text-palette-orange text-3xl uppercase">Perfil dos nossos clientes</h2>
        <p class="text-palette-brown text-base leading-relaxed">
          Para representar esse público, criamos o cliente fictício João Marcos, artesão natural da
          região do Cariri, no interior do Ceará. João começou a trabalhar com artesanato aos 17
          anos, aprendendo com sua família técnicas tradicionais que passaram de geração em geração.
          O que começou como um hobby se transformou em profissão e, ao longo dos anos, tornou-se a
          principal fonte de sustento de sua família. Hoje, aos 53 anos, João percebe a necessidade
          de modernizar seu negócio para continuar competitivo. Com a diminuição das vendas
          presenciais e o crescimento do comércio online, ele decidiu dar um novo passo: levar seu
          trabalho para o ambiente digital. No entanto, João encontra dificuldades para utilizar
          ferramentas tecnológicas e divulgar seus produtos na internet.
        </p>
      </article>

      <article class="px-[16px] space-y-4">
        <h2 class="text-palette-orange text-3xl uppercase">Nossa Solução</h2>
        <p class="text-palette-brown text-base leading-relaxed">
          Pensando nesse cenário, decidimos desenvolver um e-commerce voltado para artesãos que
          desejam ampliar sua presença no mercado digital, mas que precisam de uma plataforma
          simples e acessível. Pensado para artesãos como João, com foco em destacar o valor
          artesanal de cada peça, evidenciando o cuidado, a história e a autenticidade presentes no
          processo de criação.
        </p>
      </article>
    </section>

    <section class="pt-24">
      <header class="text-center mb-12">
        <SectionStandard title="Nossa equipe" />
      </header>

      <div class="bg-palette-cream rounded-2xl p-6 lg:p-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="membro in membros"
            :key="membro.nome"
            class="flex flex-col items-center text-center bg-palette-green-light border border-palette-green rounded-2xl p-6 gap-4 transition-transform hover:scale-[1.02]"
          >
            <img
              :src="membro.foto"
              :alt="`Foto de ${membro.nome}`"
              class="w-28 h-28 rounded-full object-cover"
            />

            <h3 class="text-palette-green text-lg font-bold">
              {{ membro.nome }}
            </h3>

            <nav class="flex gap-4" aria-label="Redes sociais">
              <a
                :href="membro.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon :size="22" class="text-palette-green" />
              </a>

              <a
                :href="membro.github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon :size="22" class="text-palette-green" />
              </a>
            </nav>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
