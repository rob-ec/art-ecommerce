<template>
  <span
    :class="[
      'flex flex-row items-center justify-center w-fit',
      'text-xs py-1.5 px-2.5 border rounded-lg mt-2',
      ' text-palette-green-light dark:text-palette-green',
      ' border-palette-green dark:border-palette-green',
      'bg-palette-green-light',
    ]"
  >
    <slot></slot>
  </span>
</template>
