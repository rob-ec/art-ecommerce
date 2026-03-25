<template>
  <button :class="[
    'cursor-pointer py-3 px-6 rounded-2xl font-semibold text-sm',
    ' text-palette-white bg-palette-green-light hover:bg-palette-green',
    ' dark:bg-palette-green dark:hover:bg-palette-green-light',
  ]">
    <slot></slot>
  </button>
</template>
