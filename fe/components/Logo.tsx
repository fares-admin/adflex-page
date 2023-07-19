import React from 'react'

function Logo(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={128}
      height={29}
      viewBox="0 0 128 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.078 20.265a435.361 435.361 0 00-2.77-7.344 324.93 324.93 0 00-2.681-6.64 185.271 185.271 0 00-2.79-6.26l-.02.04.02-.061H11.24a168.046 168.046 0 00-2.78 6.282 261.366 261.366 0 00-2.68 6.65 313.25 313.25 0 00-2.76 7.343C2.082 22.86 1.075 25.668 0 28.702h4.065l2.462-7.099 1.215-3.555c.827-2.4 1.674-4.729 2.511-6.976a106.622 106.622 0 012.67-6.465 139.68 139.68 0 012.661 6.475 390.987 390.987 0 012.571 6.977l1.136 3.31s.01.06.02.091l-4.285-3.493h-4.633l-1.186 3.452h3.737l8.898 7.283h4.285a1251.839 1251.839 0 00-3.04-8.427"
        fill="#DD1000"
      />
      <path
        d="M81.36 17.968c0-1.829.258-3.412.766-4.78.519-1.36 1.196-2.483 2.053-3.392a8.266 8.266 0 012.93-2.022 9.012 9.012 0 013.408-.674c2.7 0 4.782.858 6.227 2.594 1.445 1.716 2.163 4.361 2.163 7.896v.613c0 .255 0 .48-.03.694H85.116c.16 2.145.767 3.77 1.813 4.882 1.057 1.114 2.71 1.665 4.943 1.665 1.265 0 2.331-.122 3.188-.347.867-.214 1.515-.44 1.953-.654l.509 3.095c-.439.235-1.206.49-2.312.756-1.096.266-2.342.398-3.727.398-1.754 0-3.268-.265-4.544-.806-1.275-.542-2.331-1.287-3.158-2.237-.817-.95-1.435-2.084-1.834-3.392-.408-1.307-.598-2.737-.608-4.29m13.801-2.032c.02-1.665-.379-3.034-1.216-4.106-.847-1.073-1.993-1.604-3.467-1.604-.827 0-1.555.174-2.182.5a5.43 5.43 0 00-1.605 1.288 5.799 5.799 0 00-1.016 1.828 9.757 9.757 0 00-.488 2.104h9.974v-.01zM106.509 7.12l-4.414.01 6.925 10.224-7.722 11.338h4.006l5.749-8.57 5.73 8.56 4.394-.01-14.668-21.553z"
        fill="#fff"
      />
      <path
        d="M115.368 14.33l.249-.367 4.634-6.762-4.046.01-4.474 6.752-.249.368h3.886z"
        fill="#DD1000"
      />
      <path
        d="M42.05 8.52c-.439-.297-1.106-.593-1.993-.91-.887-.316-1.913-.48-3.07-.48-1.444 0-2.72.266-3.846.797-1.116.531-2.072 1.266-2.83 2.226-.777.95-1.365 2.095-1.763 3.402-.389 1.328-.588 2.778-.588 4.361 0 1.665.25 3.157.717 4.495.479 1.327 1.156 2.461 2.033 3.39a8.985 8.985 0 003.169 2.136c1.235.5 2.63.755 4.175.755 1.674 0 3.159-.122 4.444-.357a34.54 34.54 0 003.169-.715L45.647.03H42.05V8.52zm.02 16.485c-.36.102-.867.204-1.525.296-.658.092-1.475.133-2.461.143-1.933 0-3.478-.653-4.634-1.96-1.166-1.308-1.743-3.157-1.743-5.568 0-1.052.1-2.043.298-2.972.21-.92.539-1.726 1.007-2.4a5.016 5.016 0 011.794-1.584c.737-.378 1.614-.572 2.65-.572 1.036 0 1.883.174 2.71.511s1.445.695 1.894 1.073v13.033h.01zM71.385.072l.02 22.83c0 1.95.459 3.39 1.395 4.32.927.919 2.501 1.41 4.713 1.46l.499-3.095c-.568-.081-1.047-.173-1.425-.296-.389-.122-.698-.296-.927-.541-.23-.235-.399-.552-.498-.95a6.26 6.26 0 01-.16-1.502V.072h-3.617zM67.778 3.483V.05L53.339.06l-2.401 2.472.01 26.159h3.906l-.01-13.177 11.489-.01v-3.381H54.844V3.493l12.934-.01zM123.938 7.1c-1.884 0-3.408-1.563-3.408-3.493s1.524-3.494 3.408-3.494c1.883 0 3.407 1.573 3.407 3.494 0 1.92-1.524 3.493-3.407 3.493zm0-6.71c-1.724 0-3.129 1.44-3.129 3.217 0 1.777 1.405 3.207 3.129 3.207 1.723 0 3.128-1.44 3.128-3.207 0-1.768-1.405-3.218-3.128-3.218z"
        fill="#fff"
      />
      <path
        d="M123.22 3.882v1.297h-.388V2.033h.847c.378 0 .657.072.846.225.18.153.27.368.27.674 0 .419-.21.695-.608.848l.837 1.41h-.449l-.747-1.298h-.608v-.01zm0-.337h.468c.25 0 .429-.051.549-.153.109-.102.169-.245.169-.45 0-.204-.07-.347-.179-.439-.11-.092-.299-.133-.558-.133h-.439v1.175h-.01z"
        fill="#fff"
      />
    </svg>
  )
}

export default Logo
