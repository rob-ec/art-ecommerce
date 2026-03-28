<template>
  <button
    :class="[
      'cursor-pointer px-6 py-3 rounded-[16px] font-semibold text-sm',
      ' text-palette-white bg-palette-green-light hover:bg-palette-green',
      ' dark:bg-palette-green dark:hover:bg-palette-green/90 transition-colors',
    ]"
  >
    <slot></slot>
  </button>
</template>
