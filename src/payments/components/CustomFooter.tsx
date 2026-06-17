import { CustomLogo } from '@/components/customs/CustomLogo'
import { type FC } from 'react'

export const CustomFooter: FC = () => {
  return (
    <footer className="border-t py-12 px-4 lg:px-8 mt-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <CustomLogo />
              <p className="text-sm text-muted-foreground">
                Sistema de pagos seguro y confiable.
              </p>
            </div>
            
            
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sistema de Pagos. Todos los derechos reservados.</p>
          </div>
        </div>
    </footer>
  )
}
