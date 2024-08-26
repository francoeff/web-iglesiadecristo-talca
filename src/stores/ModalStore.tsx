import {atom} from 'nanostores'

export const isModalOpen = atom<boolean>(false)
export const modalChildren = atom<React.ReactNode>(<></>)