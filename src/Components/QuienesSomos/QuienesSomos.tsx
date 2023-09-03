import "./QuienesSomos.css"
import WorkButton from '../WorkButton/WorkButton'
export const QuienesSomos = () => {
  return (
    <div id='div-QuienesSomos' className="seccion">
        <div id='img-QuienesSomos'>
            
        </div>
        <div id='div-QuienesSomosContent'>
            <div id='title-QuienesSomos'>
              <h2>Sobre nosotros</h2></div>
            <div id='text-QuienesSomos'>
              <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

              </h3>
            
            </div>
            <div id='workButton-QuienesSomos'>
                <WorkButton text={'Trabaja con nosotros'} />
            </div>
        </div>
    </div>
  )
}
