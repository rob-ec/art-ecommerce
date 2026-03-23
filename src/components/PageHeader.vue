<template>
  <div class="flex px-10 py-5 flex-row justify-between">
    <div>
      Logo
    </div>
    <nav class="flex flex-row justify-center gap-5">
      <RouterLink to="/products" class="hover:text-blue-500">Produtos</RouterLink>
      <RouterLink to="/ctegories" class="hover:text-blue-500">Categorias</RouterLink>
      <RouterLink to="/about" class="hover:text-blue-500">Sobre</RouterLink>
    </nav>
    <div>
      Carrinho
    </div>
  </div>
</template>
