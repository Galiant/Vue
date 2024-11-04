<template>
  <SectionCard>
    <div class="flex justify-between">
      <div class="flex space-x-2">
        <div>{{ title }}</div>
        <div><component :is="icon" :class="{ 'animate-spin': pending }" /></div>
      </div>
      <RoundButton variant="danger" @click="$emit('cancelled')"
        >Cancel</RoundButton
      >
    </div>
  </SectionCard>
</template>

<script setup>
import RoundButton from '@/components/RoundButton.vue';
import SectionCard from '@/components/SectionCard.vue';
import { Check, LoaderCircle } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  status: String,
});
defineEmits(['cancelled']);
const pending = computed(() => props.status === 'pending');
const icon = computed(() => (pending.value ? LoaderCircle : Check));
</script>
