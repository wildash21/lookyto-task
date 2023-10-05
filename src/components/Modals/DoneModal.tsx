import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setModal } from '@/redux/slice'

import Modal from '.'

import lang from '@/lang'

export default function DoneModal() {
    const dispatch = useAppDispatch()

    return (
        <Modal>
            {lang.done}
            <button onClick={() => dispatch(setModal(null))}>{lang.ok}</button>
        </Modal>
    )
}
