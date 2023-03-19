<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import EntryEditor from './components/EntryEditor.vue';
import EntryCard from './components/EntryCard.vue';


import { userInjectionKey } from './InjectionKey'

import { reactive, provide, inject } from 'vue'


import type { User }  from '@/types/USer'
import type Emoji from './types/Emoji';
import type Entry from './types/Entry';


const entries = reactive<Entry[]>([])


const user: User = reactive({
  id: 1,
  username: 'filipanselmo11',
  settings: [],
})

provide(userInjectionKey, user)

const injectUser = inject(userInjectionKey)

const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry)
}

</script>

<template>

  <main class="container m-auto p-10">
    <TheHeader/>
    <EntryEditor @create="handleCreateEntry"/>
    <ul>
      <li v-for="entry in entries" :key="entry.id">
        <EntryCard :entry="entry"/>
      </li>
    </ul>
  </main>
</template>
