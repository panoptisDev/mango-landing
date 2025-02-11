import { FunctionComponent } from 'react'
// import { useRef, useEffect } from 'react'
// import { gsap, Power3 } from 'gsap'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import ColorBlur from './ColorBlur'

const HeroSectionHome = () => {
  // const sideImage = useRef(null)

  // const tl = gsap.timeline()

  // useEffect(() => {
  //   //image animation
  //   tl.to(sideImage.current, 0.7, {
  //     opacity: 1,
  //     y: 0,
  //     ease: Power3.easeOut,
  //   })
  // }, [])
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:px-20 xs:px-6">
      <div className="text-center lg:text-left max-w-[800px] mx-auto w-full lg:w-1/2 xl:w-2/5 lg:pr-16">
        <h1 className="mb-4">Safer. Smarter. Faster.</h1>
        <p className="text-base lg:text-lg text-th-fgd-3 mb-6">
          A magical new way to interact with DeFi. Groundbreaking safety
          features designed to keep your funds secure. The easiest way to margin
          trade any token pair. All powered by flashloans.
        </p>
        {/* <p className="text-base  text-th-fgd-3 mb-6">
            Mango v4 is in public beta. Re-designed from the ground up with
            innovative new features and risk mitigation strategies, you can
            finally ditch your CEX.
          </p> */}
        {/* <CheckBullet>Trade spot & perpetuals up to 10x leverage.</CheckBullet>
          <CheckBullet>Earn interest on all deposits.</CheckBullet>
          <CheckBullet>Borrow any listed token.</CheckBullet>
          <CheckBullet showNewBadge>Permissionless token listings.</CheckBullet> */}
        {/* <CheckBullet showNewBadge>{t('home:bullet-5')}</CheckBullet> */}
        <div className="flex items-center mt-6 lg:mt-10 space-x-8 justify-center lg:justify-start">
          <ButtonLink
            linkText="Trade Now"
            path="https://app.mango.markets"
            size="large"
          />
          <a
            href="https://docs.mango.markets"
            rel="noopener noreferrer"
            className="font-bold flex items-center text-th-fgd-2 md:hover:text-th-fgd-3 default-transition"
            target="_blank"
          >
            View Docs
            <ChevronRightIcon className="h-6 w-6 mt-0.5" />
          </a>
        </div>
        {/* <p className="mt-8 text-xs">Website under contruction.</p> */}
      </div>
      <div className="relative h-max w-full lg:w-1/2 xl:w-3/5 flex justify-center mb-4 lg:mb-0">
        <img
          // ref={sideImage}
          className="w-full sm:w-3/4 md:w-1/2 lg:w-full h-auto "
          src="../img/swap-trade.png"
          alt=""
        />
      </div>
      <ColorBlur
        width="66%"
        height="300px"
        className="-top-20 left-0 opacity-20"
      />
    </div>
  )
}

export default HeroSectionHome

// const CheckBullet = ({
//   children,
//   showNewBadge,
// }: {
//   children: ReactNode
//   showNewBadge?: boolean
// }) => {
//   return (
//     <div className="mb-2 flex items-center space-x-2.5">
//       <CheckCircleIcon className="h-6 w-6 text-th-fgd-3 flex-shrink-0" />
//       <p className="text-base lg:text-lg text-th-fgd-2">
//         {children}
//         {showNewBadge ? (
//           <span className="py-0.5 px-1 rounded bg-th-fgd-1 font-medium text-sm uppercase text-th-bkg-1 ml-2">
//             New
//           </span>
//         ) : null}
//       </p>
//     </div>
//   )
// }

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string
  size?: 'large' | 'medium' | 'small'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size = 'medium',
}) => {
  return (
    <a
      className={`flex sm:w-max items-center justify-center rounded-md ${
        secondary
          ? 'border border-th-red-dark'
          : 'bg-th-red-dark md:hover:brightness-90'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
          ? 'h-12 px-6'
          : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  )
}
