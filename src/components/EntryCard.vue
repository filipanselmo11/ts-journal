<script lang="ts" setup>
import DateDisplay from './DateDisplay.vue';
import UseEmojis from '@/composables/UseEmojis'
import type Entry  from '@/types/Entry';

const { findEmoji } = UseEmojis()

defineProps<{
    entry: Entry,
}>();
</script>

<template>
    <div class="entry-card">
        <div class="entry-card-body">
            <component width="75" :is="findEmoji('happy')"></component>
            <div class="entry-text">
                {{ entry.body }}
            </div>
        </div>
        <div class="entry-footer">
            <DateDisplay :date="entry.createdAt" class="mr-2"/>

            <span class="ml-2">
                filipanselmo11
            </span>
        </div>
    </div>
</template>