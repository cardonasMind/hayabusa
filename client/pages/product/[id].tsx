import { PureComponent } from "react";

import { Header } from "../../src/components";

const content = "TIENDA OFICIAL BEGÔNIA\n«===================================================»\nSomos Begônia, tienda oficial y queremos ayudarte a tener un hogar único. Para ello, creamos productos de alta calidad y con un diseño exclusivo que se adapta a tu hogar, cuidando los precios para que sean totalmente accesibles. Verás productos que siguen las últimas tendencias para que disfrutes todos los días y puedas tenerlo al alcance de tus manos y lo más pronto posible.\n\n«===================================================»\nSilla De Oficina Apoya Brazos Giratoria Begônia\n\n«===================================================»\n««IMPORTANTE LEER, PREGUNTAS FRECUENTES»»\n«===================================================»\n\nSOBRE ENVÍOS\n\n»» ¿Se realizan envíos o se puede retirar en algún punto de venta?\n\nNuestra tienda es totalmente virtual por lo que solamente manejamos envíos a todo el país a través de Mercado Envíos, por el momento no ofrecemos la posibilidad de retirar el producto en algún punto de venta.\n\n»» ¿Cómo se calculan los costos de envío?\n\nLos costos de envíos los calcula la plataforma según tu ubicación, no tenemos manejo directo sobre los costos. Si el producto es mayor de 70.000 tendrá envío gratis, si es menor la plataforma te indicará el precio del envío antes confirmar la compra. El precio publicado es únicamente el del producto cuando hagas clic en “Calcular cuándo llega” te indicará precio de envío adicional y fecha entrega\n\nPara saber más sobre costos de envíos puedes verlos desde aquí https://www.mercadolibre.com.co/ayuda/costos-de-envios.gratis_3287\n\n»» ¿Cómo es el proceso de envío?\n\nA penas realices la compra, despachamos el producto, nuestros envíos son FULL lo que significa que son rápidos y seguros (Que sea Full no significa que tenga envío gratis, eso depende del costo del producto como se indica en el punto anterior). Cuando estés realizando la compra, se te indicará las fechas aproximadas de llegada, el cual ya depende de la transportadora, sin embargo nosotros estamos completamente pendientes de que te llegue.\n\n»» ¿Cómo hago seguimiento del envío?\n\nIngresando a la plataforma de Mercado Libre, en el detalle de tu compra, se te va a disponibilizar un código con su respectivo link donde vas a poder hacer el seguimiento con la empresa encargada de entregarte el artículo.\n\n\nSOBRE MÉTODOS DE PAGO\n\n»» ¿Cómo se paga?\n\nLos pagos se realizan cuando le das “comprar” en la publicación a través de mercado pago, puedes realizarlo por todos los medios que te ofrece la plataforma. Tiene convenios con bancos seleccionados, en efectivo y a través de plataformas como PSE. No hay posibilidad de pagos contra entrega, ya que la compra se recibe hasta que se realiza el pago.\n\nSOBRE EXPERIENCIA DE COMPRA\n\n»» Tiene una compra totalmente segura, el producto si tiene stock disponible y a penas oferte, será despachado. Por el momento no ofrecemos ventas al por mayor o descuentos que no estén publicados en la plataforma.\n\n\n\n\n\n»» ¿Por qué me piden tantos datos sobre mi residencia al ofertar?\n\nSabemos que es importante la factura del producto para ti, por ello tenemos un sistema que las realiza las facturas automáticamente, para que se te envíe dicha factura el sistema pide algunos datos como códigos de departamento y municipio.\n\n»» ¿Cómo sé cuáles son los códigos de mi residencia, departamento y/o municipio?\n\nEn las imágenes de cada publicación, al final tenemos una lista de todos los códigos ordenados alfabéticamente, puedes encontrar tus códigos allí y colocarlos al realizar la compra. Si deseas más información puedes encontrarlos en la página de la DIAN y en la página de Códigos postales si deseas saber específicamente el de tu residencia.\n\n»» ¿Qué garantía tienen los productos?\n\nEste producto tiene garantía de 12 meses/1 año donde nos podrás informar cualquier inconveniente que tengas directamente la mensajería y con gusto te ayudaremos a resolver cualquier inquietud o inconveniente.\n\n\n\n\n»»\n\n\n\n\n¡¡CUALQUIER OTRA DUDA, ESTAMOS A TU DISPOSICIÓN!!\n\n¿Hacen Factura? Sí, hacemos factura. La misma se genera de forma automática a partir de los datos que cargas al momento de completar el checkout de tu compra, estos pueden ser a nombre de una persona física o empresa. Te pedimos que cargues la documentación correspondiente al efectuar la compra, en la sección \"Completa los datos para tu factura\".";

export default class extends PureComponent {
    
    render() {
        return (
            <body className="h-screen bg-gray-100">
                <Header />

                <div className="bg-white m-10 rounded shadow-md">
                    <div>


                        <div>
                            <h1 className="text-2xl">Descripción</h1>

                            <div dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </body>
        )
    }
}