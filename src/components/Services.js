import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla vel consectetur cum harum. Recusandae similique porro aspernatur sint voluptas ratione earum quia mollitia eum. Quidem, cum. Illo, quaerat minus!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla vel consectetur cum harum. Recusandae similique porro aspernatur sint voluptas ratione earum quia mollitia eum. Quidem, cum. Illo, quaerat minus!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla vel consectetur cum harum. Recusandae similique porro aspernatur sint voluptas ratione earum quia mollitia eum. Quidem, cum. Illo, quaerat minus!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nulla vel consectetur cum harum. Recusandae similique porro aspernatur sint voluptas ratione earum quia mollitia eum. Quidem, cum. Illo, quaerat minus!"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, id) => {
            return (
              <article key={id} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
