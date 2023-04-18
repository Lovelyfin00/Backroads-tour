import { servicesLists } from "./data"
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title="our" subTitle="services"/>
    <div className="section-center services-center">
        {
            servicesLists.map(service => {
                const {id, title, icon, serviceText} = service;
                return(
                    <article className="service" key={id}>
                        <span className="service-icon"><i className={icon}></i></span>
                        <div className="service-info">
                            <h4 className="service-title">{title}</h4>
                            <p className="service-text">
                                {serviceText}
                            </p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  </section>
  )
}
export default Services