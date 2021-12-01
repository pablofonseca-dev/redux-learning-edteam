import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { addToCar, removeFromCar } from '../../redux/actionCreators'
import { connect } from 'react-redux'

const CourseCard = ({
  id,
  title,
  image,
  price,
  professor,
  addCourseToCar,
  removeCourseFromCar,
  car,
}) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">{professor}</div>
        <div className="s-main-center">
          {!car.find((product) => product === id) ? (
            <button
              className="button ghost third-color button--tiny"
              onClick={() => addCourseToCar(id)}
            >
              {`$ ${price} USD`}
            </button>
          ) : (
            <button
              className="button third-color button--tiny"
              onClick={() => removeCourseFromCar(id)}
            >
              Remover del carrito
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string,
}

CourseCard.defaultProps = {
  title: 'No se encontró título',
  image: 'http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg',
  price: '--',
  profesor: '',
}

const mapStateToProps = (state) => ({
  car: state.car,
})

const mapDispatchToProps = (dispatch) => ({
  addCourseToCar(id) {
    dispatch(addToCar(id))
  },
  removeCourseFromCar(id) {
    dispatch(removeFromCar(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)
