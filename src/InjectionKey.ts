import type { InjectionKey } from 'vue';

import type { User } from './types/USer';
export const userInjectionKey = Symbol() as InjectionKey<User>