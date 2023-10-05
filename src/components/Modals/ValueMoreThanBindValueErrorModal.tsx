import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setModal } from '@/redux/slice'

import Modal from '.'

import lang from '@/lang'

export default function ValueMoreThanBindValueErrorModal({
    characteristic,
}: {
    characteristic: string
}) {
    const dispatch = useAppDispatch()

    return (
        <Modal>
            {lang.valueMoreThanBindValueError(
                (lang as unknown as Record<string, string>)[characteristic]
            )}
            <button onClick={() => dispatch(setModal(null))}>{lang.ok}</button>
        </Modal>
    )
}
