import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setModal } from '@/redux/slice'

import Modal from '.'
import ChangeNameModal from '@/components/Modals/ChangeNameModal'
import lang from '@/lang'

export default function NameIsEmptyErrorModal() {
    const dispatch = useAppDispatch()

    return (
        <Modal>
            {lang.nameIsEmptyError}
            <button onClick={() => dispatch(setModal(<ChangeNameModal />))}>{lang.ok}</button>
        </Modal>
    )
}
