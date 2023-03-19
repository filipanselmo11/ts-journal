<script setup lang="ts">
// import EmojiField from '@/components/EmojiField.vue'
// import ArrowCircleRight from '@/components/ArrowCircleRight.vue'

import type  Emoji  from '@/types/Emoji';
import type Entry from '@/types/Entry';

import { ref, computed } from 'vue'

const body = ref('')


const emoji = ref<Emoji | null>(null)

const charCount = computed(() => {
    return body.value.length
})

const maxChars = 280

// Events
// defineEmits(['create'])

const emit = defineEmits<{
    (e: 'create', entry: Entry): void;
}>();

//Methods
const handleTextInput = (e: Event) => {
    const textarea = e.target as HTMLTextAreaElement;
    if (textarea.value.length <= 280) {
        body.value = textarea.value
    } else {
        body.value = textarea.value = textarea.value.substring(0, 280)
    }
}

const handleSubmit = () => {
    emit('create',{
        body: body.value,
        emoji: emoji.value,
        createdAt: new Date(),
        userId: 1,
        id: Math.random(),
    })


    body.value = ''
    emoji.value = null
}
</script>


<template>
    <form class="entry-form" @submit.prevent="handleSubmit">
        <textarea @keyup="handleTextInput" :value="body" placeholder="New Journal"></textarea>
        <!---EmojiField v-model=emoji-->
        <div class="entry-form-footer">
            <span>{{ charCount }} / {{ maxChars }}</span>
            <button>Remember <!--ArrowCircleRight--></button>
        </div>
    </form>
</template>