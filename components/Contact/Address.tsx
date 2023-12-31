import useTranslation from '@/hooks/useTranslation'
import { ReactNode } from 'react'
import Title from '../Title'

function Icon({ ...props }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0v16h9.313L16 9.313V0z" fill="#DD1000" />
    </svg>
  )
}

function Item({
  title,
  content,
  className = '',
}: {
  title: string
  content: string | ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Icon />
        <p className="font-medium">{title}</p>
      </div>
      <div className="mt-4 text-xl">{content}</div>
    </div>
  )
}

function Address() {
  const tranRes = useTranslation(['Trụ sở AdFlex', 'Địa chỉ'])

  return (
    <div className="max-w-[1126px] px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[104px] text-black">
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={500}>
          <Title className="">{tranRes[0]}</Title>
          <div className="flex flex-col gap-6 justify-between py-6">
            <Item title="Email" content="info@adflex.vn" />
            <Item title="Hotline" content="0345 036 008" />
            <Item
              title={tranRes[1]}
              content={
                <div className="flex flex-col gap-3 text-xl leading-normal">
                  <p>
                    <span className="font-semibold underline underline-offset-4">Hà Nội:</span> Tầng
                    2, Toà nhà Ecolife Capitol 58 Tố Hữu, Mễ Trì, Nam Từ Liêm, Hà Nội
                  </p>
                  <p>
                    <span className="font-semibold underline underline-offset-4">HCM:</span> 99
                    Nguyễn Thị Minh Khai, Quận 1, Tp. HCM
                  </p>

                  <p>
                    <span className="font-semibold underline underline-offset-4">SINGAPORE:</span>{' '}
                    470 North BridgeRoad, #05 -12 Bugis Cube, Singapore
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <iframe
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={700}
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.980414871609!2d105.78404967574954!3d20.993422180647144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad53b87226c1%3A0x8db6892d7e33a120!2zRWNvTGlmZSBU4buRIEjhu691!5e0!3m2!1svi!2s!4v1689585130721!5m2!1svi!2s"
          className="w-full h-[300px] md:h-full"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Address
