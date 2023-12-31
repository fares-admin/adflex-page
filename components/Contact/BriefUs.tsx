import useTranslation from '@/hooks/useTranslation'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'
import { useState } from 'react'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'

function BriefUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [note, setNote] = useState('')

  const tranRes = useTranslation([
    'Chúng tôi luôn muốn lắng nghe từ bạn',
    'Hãy cho chúng tôi biết ý tưởng của bạn.',
    'Họ và tên',
    'Số điện thoại',
    'Thông tin bạn quan tâm',
    'Nhận thông tin từ Adflex',
    'Gửi thông tin',
  ])

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10"
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">{tranRes[0]}</p>
        <p className="mt-2 text-xl">{tranRes[1]}</p>
        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 text-black">
            <PrimaryInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={tranRes[2]}
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
              placeholder={tranRes[3]}
              className="w-full"
              type="number"
            />
          </div>
          <div className="text-black">
            <PrimaryTextarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={tranRes[4]}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-8 mt-6 md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <p className="text-black">{tranRes[5]}</p>
          </div>
          <PrimaryBtn
            onClick={() => handleSubmitForm({ name, email, phoneNumber, note })}
            className="w-full md:w-auto"
          >
            {tranRes[6]}
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default BriefUs
