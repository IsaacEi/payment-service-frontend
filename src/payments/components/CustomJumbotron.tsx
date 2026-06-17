import { type FC } from 'react'

interface Props {
    title: string;
    subTitle?: string;
}

export const CustomJumbotron: FC<Props> = ({ title, subTitle }) => {
    const defaultSubTitle = "Bienvenido a la sección de pagos. Aquí puedes gestionar y revisar todos los pagos registrados en el sistema.";

    return (
        <section className="py-10 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto text-center">
            <h1 className="font-montserrat text-2xl lg:text-5xl tracking-tight mb-4">
                {title}
            </h1>
            <p className="font-montserrat text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {subTitle || defaultSubTitle}
            </p>
            </div>
        </section>
    )
}
