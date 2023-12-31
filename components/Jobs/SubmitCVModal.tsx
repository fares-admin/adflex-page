import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import InputFile from '../InputFile'

function SubmitCVModal({ children }: { children: ReactNode }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [note, setNote] = useState('')

  return (
    <div className="">
      <div onClick={open} className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay onDismiss={close} className="z-50 flex items-center justify-center !mx-">
            <MotionDialogContent
              aria-label="Popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] !p-0 md:min-w-[1114px] !bg-transparent"
            >
              <motion.form
                className="flex flex-col p-4 px-4 bg-white rounded-lg md:px-10 md:py-10 bg-opacity-60 backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                method="post"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[24px] md:text-[40px]">Nộp CV ứng tuyển</p>
                  <CloseDialogIcon className="w-8 cursor-pointer md:w-10" onClick={close} />
                </div>
                <p className="mt-2 text-sm md:text-xl">Hãy cho chúng tôi thấy năng lực của bạn.</p>
                <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                  <div className="flex flex-col gap-6">
                    <PrimaryInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Họ và tên"
                      className="w-full"
                    />
                    <PrimaryInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full"
                    />
                    <PrimaryInput
                      value={String(phoneNumber)}
                      onChange={(e) => setPhoneNumber(Number(e.target.value))}
                      placeholder="Số điện thoại"
                      className="w-full"
                      type="number"
                    />
                  </div>
                  <div>
                    <PrimaryTextarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Giới thiệu về bản thân bạn"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                  <InputFile />
                </div>
                <div className="flex flex-col items-center justify-end gap-8 mt-6 md:flex-row">
                  <PrimaryBtn type="submit">Gửi thông tin</PrimaryBtn>
                </div>
              </motion.form>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SubmitCVModal
