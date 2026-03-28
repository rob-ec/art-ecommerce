<template>
  <button
    :class="[
      'cursor-pointer px-6 py-3 rounded-[16px] font-semibold text-sm',
      'border  text-palette-yellow border-palette-yellow bg-none',
      'hover:text-palette-orange hover:border-palette-orange transition-colors',
      'dark:text-palette-orange dark:border-palette-orange transition-colors ',
      'dark:hover:text-palette-yellow dark:hover:border-palette-yellow bg-none',
    ]"
  >
    <slot></slot>
  </button>
</template>
