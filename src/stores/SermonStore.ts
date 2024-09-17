import type { MDXInstance } from 'astro'
import {atom} from 'nanostores'

export const sermonsFiltered = atom<MDXInstance<Record<string, any>>[]>([])