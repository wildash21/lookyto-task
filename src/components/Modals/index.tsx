import { useEffect, type ReactNode } from 'react'
import { setModal } from '@/redux/slice'
import { useAppDispatch } from '@/hooks/useAppDispatch'

import styles from './style.module.scss'

export default function Modal({ children }: { children: ReactNode }) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <div className={styles.modal} onClick={() => dispatch(setModal(null))}>
            <div className={styles.modal__window} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
