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
    github: 'https://github.com/gabrielgurgel7'
  },
  {
    nome: 'Robson Gomes',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQEtTJjd-s1Oyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728751208248?e=1776297600&v=beta&t=f5QilR9A4JsQR_p9SaF3Uq84CI-5Oe6xCmtyXNDmcqA',
    linkedin: 'https://www.linkedin.com/in/robson-m-gomes/',
    github: 'https://github.com/rob-ec'
  },
  {
    nome: 'Vinicius Braga',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQH8ewMhF7F_QA/profile-displayphoto-shrink_400_400/B4DZTtuJM0HAAg-/0/1739155084985?e=1776297600&v=beta&t=mEPnf-Qmi9X-xy7nex8HTYXzFcab-7R7GBxan2EqVXU',
    linkedin: 'https://www.linkedin.com/in/viníciusbragaamaral/',
    github: 'https://github.com/AMARAL1777'
  },

]
</script>

<template>
  <main>
    <section class="bg-palette-cream min-h-screen px-4 pt-0 md:px-10 lg:px-30.5 lg:pb-30">
      <SectionStandard title="Nossa Equipe" />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 md:px-10 lg:px-20">
        <article
          v-for="membro in membros"
          :key="membro.nome"
          class="flex flex-col justify-center items-center bg-gray-800 rounded-[16px] p-[20px] gap-[10px]"
        >

          <img :src="membro.foto" :alt="membro.nome" class="w-32 h-32 rounded-full object-cover" />
          <h2 class="text-palette-cream uppercase text-center">{{ membro.nome }}</h2>

          <div class="flex gap-4">
            <a :href="membro.linkedin" target="_blank">
              <LinkedinIcon :size="24" class="text-palette-cream" />
            </a>
            <a :href="membro.github" target="_blank">
              <GithubIcon :size="24" class="text-palette-cream" />
            </a>
          </div>
        </article>
      </div>
    <section class="bg-palette-brown px-4 py-10 lg:px-20 rounded-[16px] mx-4 md:mx-10 lg:mx-20">
      <div class="px-4 py-10 lg:px-20 text-center mt-">
        <h2 class = " font-bold uppercase text-3xl mb-10" >  Proposta de segmento para o E-commerce </h2>
        <div class="w-full border-b border-palette-cream mt-2 mb-6"></div>
          <p class = " text-xl   text-justify">No Ceará, assim como em diversas regiões do Brasil onde o artesanato tem forte presença
cultural e econômica, milhares de famílias sobrevivem da produção artesanal. Segundo
dados do Programa do Artesanato Brasileiro (PAB), o setor movimenta bilhões de reais por
ano no país e representa uma importante fonte de renda para pequenos produtores,
especialmente no Nordeste, onde o trabalho manual está ligado à tradição, à identidade
cultural e à economia local.</p>
      </div>
      </section>

<div class="grid grid-cols-1 md:grid-cols-3 divide-x divide-palette-brown px-4 py-10 lg:px-20 gap-6">

  <div class="px-6">
    <h2 class="text-palette-brown text-3xl font-bold uppercase mb-4">Problema</h2>
    <p class="text-palette-brown text-xl">Apesar dessa relevância, muitos artesãos enfrentam dificuldades para expandir seus
negócios. A comercialização ainda depende, em grande parte, de feiras presenciais,
encomendas locais e turismo, o que limita o alcance dos produtos. Além disso, o uso de
tecnologias digitais e plataformas de venda online ainda é um desafio para muitos desses
profissionais, seja por falta de conhecimento técnico, falta de recursos ou dificuldade de
adaptação às ferramentas disponíveis.</p>
  </div>

  <div class="px-6">
    <h2 class="text-palette-brown text-3xl  font-bold uppercase mb-4">Perfil dos nossos clientes</h2>
    <p class="text-palette-brown text-xl">Para representar esse público, criamos o cliente fictício João Marcos, artesão natural da
região do Cariri, no interior do Ceará. João começou a trabalhar com artesanato aos 17
anos, aprendendo com sua família técnicas tradicionais que passaram de geração em
geração. O que começou como um hobby se transformou em profissão e, ao longo dos
anos, tornou-se a principal fonte de sustento de sua família.
Hoje, aos 53 anos, João percebe a necessidade de modernizar seu negócio para continuar
competitivo. Com a diminuição das vendas presenciais e o crescimento do comércio
online, ele decidiu dar um novo passo: levar seu trabalho para o ambiente digital. No
entanto, João encontra dificuldades para utilizar ferramentas tecnológicas e divulgar seus
produtos na internet.</p>
  </div>

  <div class="px-6">
    <h2 class="text-palette-brown text-3xl  font-bold uppercase mb-4">Nossa solução</h2>
    <p class="text-palette-brown text-xl">Pensando nesse cenário, decidimos desenvolver um e-commerce voltado para artesãos
que desejam ampliar sua presença no mercado digital, mas que precisam de uma
plataforma simples e acessível. Pensado para artesãos como João, com foco em destacar
o valor artesanal de cada peça, evidenciando o cuidado, a história e a autenticidade
presentes no processo de criação.</p>
  </div>
</div>
    </section>
  </main>
</template>
