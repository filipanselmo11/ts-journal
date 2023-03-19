<script lang="ts">
//Composition API
import formatRelative from 'date-fns/formatRelative'
import { defineComponent } from 'vue';

import type Entry from '@/types/Entry';

export default defineComponent({
    props: {
        date: {
            type: Date,
            required: true
        },
    },

    emits:{
        someFunction(payload: Entry) {
            return payload.body && payload.createdAt
        }
    },

    computed:{
        formatted():string {

            return formatRelative(this.date, Date.now())
        }
    },
})
</script>

<template>
    <div>
        {{ formatted }}
    </div>
</template>