import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import { useRouter } from 'next/router'
import SecondaryBtn from '../SecondaryBtn'

function Banner() {
  const content = useGetContent({
    componentName: Banner.name,
    defaultValue: [
      'Bạn quan tâm đến việc làm tại Adflex?',
      'Hãy theo dõi trang tuyển dụng của chúng tôi!',
      'Tuyển dụng',
    ],
  })
  const tranRes = useTranslation(content)

  const router = useRouter()

  return (
    <div className="px-4 mx-auto mt-32 max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        style={{
          backgroundImage: `url(/images/contact/contact-banner.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex items-center justify-center min-h-[320px] rounded-2xl"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-[30px] md:text-[40px] text-center">{tranRes[0]}</p>
          <p className="text-sm md:text-lg max-w-[604px] text-center">{tranRes[1]}</p>
          <SecondaryBtn className="w-[180px]" onClick={() => router.push('/jobs')}>
            {tranRes[2]}
          </SecondaryBtn>
        </div>
      </div>
    </div>
  )
}

export default Banner
