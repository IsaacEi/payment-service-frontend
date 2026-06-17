import { type FC } from 'react'
import { Outlet } from 'react-router'
import { CustomHeader } from '@/payments/components/CustomHeader'
import { CustomFooter } from '@/payments/components/CustomFooter';


export const PaymentLayaout: FC = () => {
  return (
    <div className=" bg-gray-50 flex">
      <div className="flex-1 flex flex-col">
        <CustomHeader />
        
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <CustomFooter />
      </div>
    </div>
  )
}
