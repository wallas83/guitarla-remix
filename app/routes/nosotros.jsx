import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return [
    { title: 'GuitarLa - sobre Nosotros' },
    { description: 'Venta de guitarras, blog de musica' }
  ]


}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros' />
        <div>
          <p>Lorem unt nibh, elementum viverra mauris augue at nunc. Nulla ornare felis vel molestie ultricies. Nunc a euismod lacus. Nunc ac ullamcorper diam. Vivamus non pharetra libero, id viverra diam. Sed mattis orci at eros euismod mattis. Aliquam hendrerit lorem faucibus, porta enim eget, ultrices mauris. Ut condimentum lacinia placerat. Maecenas gravida nec nulla a blandit. Nam a quam volutpat, ultricies dui nec, sollicitudin purus. Nunc aliquam et odio et tristique. Nunc volutpat, tellus ac euismod eleifend, neque libero ornare metus, nec euismod nulla eros vel enim. Vivamus eu commodo enim, sit amet porta risus.</p>
          <p>Nunc volutpat, tellus ac euismod eleifend, neque libero ornare metus, nec euismod nulla eros vel enim. Vivamus eu commodo enim, sit amet porta risus.</p>

        </div>
      </div>
    </main>
  )
}

export default Nosotros