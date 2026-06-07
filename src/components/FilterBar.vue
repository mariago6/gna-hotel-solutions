<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import arrowIcon from "../assets/arrow.svg";
import { filterOptions } from "../data/filterOptions";

const emit = defineEmits(["filter-change"]);

const isOpen = ref(false);
const selectedOption = ref(filterOptions[0]);
const dropdownRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
  emit("filter-change", option.value);
};

const closeDropdown = () => {
  isOpen.value = false;
};

// Close the custom dropdown when the user clicks outside of it.
const handleClickOutside = (event) => {
  if (!dropdownRef.value?.contains(event.target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <section class="filter-bar">
    <label id="category-label">Filtrar per</label>

    <div
      ref="dropdownRef"
      class="custom-select"
      :class="{ 'is-open': isOpen }"
      @keydown.esc="closeDropdown"
    >
      <button
        type="button"
        class="custom-select-trigger"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
        aria-labelledby="category-label"
        @click.stop="toggleDropdown"
      >
        <span>{{ selectedOption.label }}</span>

        <img :src="arrowIcon" alt="" class="select-arrow" aria-hidden="true" />
      </button>

      <ul
        v-if="isOpen"
        class="custom-select-options"
        role="listbox"
        aria-labelledby="category-label"
      >
        <li
          v-for="option in filterOptions"
          :key="option.value"
          role="option"
          :aria-selected="selectedOption.value === option.value"
        >
          <button
            type="button"
            class="custom-select-option"
            :class="{ 'is-selected': selectedOption.value === option.value }"
            @click="selectOption(option)"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
