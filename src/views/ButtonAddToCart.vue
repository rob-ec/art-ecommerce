<template>
  <button
    :class="[
      'cursor-pointer py-3 px-6 rounded-2xl font-semibold text-sm',
      'border  text-palette-yellow border-palette-yellow bg-none',
      'hover:text-palette-orange hover:border-palette-orange ',
      'dark:text-palette-orange dark:border-palette-orange ',
      'dark:hover:text-palette-yellow dark:hover:border-palette-yellow bg-none',
    ]"
  >
    <slot></slot>
  </button>
</template>
