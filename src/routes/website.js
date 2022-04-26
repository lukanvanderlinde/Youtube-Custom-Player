import { Fragment } from 'react'

export default function Website() {
  return (
    <Fragment>
      <div className='bg-vtex-pink-5 rounded-sm mx-20 p-6 flex flex-auto space-x-6'>
        <div className='bg-white rounded-md box-border h-24 aspect-square'></div>

        <div className='flex-grow'>
          <h3 className='text-vtex-pink-4 font-medium'>
            Vamos começar uma nova integração.
          </h3>
          <p className='text-sm'>
            A plataforma VTEX irá se conectar com sua conta no marketplace.
            Complete o passo a passo para finalizar a configuração inicial e
            começar a enviar produtos e receber pedidos.
          </p>
        </div>
      </div>
    </Fragment>
  )
}
