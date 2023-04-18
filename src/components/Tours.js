import Title from "./Title"
import { toursCard } from "./data"

const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title="Featured" subTitle="tours"/>

    <div className="section-center featured-center">
        {
            toursCard.map(card => {
                const { id, image, tourDate,tourTitle, tourText, country, tourDays, tourAmount } = card;
                return(
                    <article className="tour-card" key={id}>
                    <div className="tour-img-container">
                      <img src={image} className="tour-img" alt="" />
                      <p className="tour-date">{tourDate}</p>
                    </div>
                    <div className="tour-info">
                      <div className="tour-title">
                        <h4>{tourTitle}</h4>
                      </div>
                      <p>
                        {tourText}
                      </p>
                      <div className="tour-footer">
                        <p>
                          <span><i className="fas fa-map"></i></span> {country}
                        </p>
                        <p>{tourDays} days</p>
                        <p>from {tourAmount}</p>
                      </div>
                    </div>
                  </article>
                )
            })
        }
    </div>
  </section>
  )
}
export default Tours