import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setModal } from '@/redux/slice'

import Modal from '.'

import lang from '@/lang'

export default function DecrementZeroSkillErrorModal() {
    const dispatch = useAppDispatch()

    return (
        <Modal>
            {lang.decrementZeroSkillError}
            <button onClick={() => dispatch(setModal(null))}>{lang.ok}</button>
        </Modal>
    )
}
