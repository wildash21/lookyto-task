import { useEffect, useRef } from 'react'
import { setModal } from '@/redux/slice'
import useHeroProperty from '@/hooks/useHeroProperty'
import { useAppDispatch } from '@/hooks/useAppDispatch'

import Modal from '.'
import NameIsEmptyErrorModal from '@/components/Modals/NameIsEmptyErrorModal'

import lang from '@/lang'

export default function ChangeNameModal() {
    const [name, setName] = useHeroProperty('name')
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current!.focus()
    }, [])

    const onSubmit = () => {
        if (!ref.current?.value) {
            return dispatch(setModal(<NameIsEmptyErrorModal />))
        }
        setName(ref.current.value)
        dispatch(setModal(null))
    }

    return (
        <Modal>
            {lang.enterNewName}
            <input
                ref={ref}
                defaultValue={name}
                onKeyUp={(event) => {
                    if (event.key === 'Enter') onSubmit()
                }}
            />
            <button onClick={onSubmit}>{lang.ok}</button>
        </Modal>
    )
}
