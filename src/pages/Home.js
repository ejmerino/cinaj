import React, { useState, useEffect, useRef } from "react";
import "./styles/Home.css";
import grupal1 from "../assets/fotos/grupal1.png";
import grupal2 from "../assets/fotos/grupal2.png";

const Home = () => {
    const [opacity, setOpacity] = useState(0);
    const introRef = useRef(null);
    const imageTextRef1 = useRef(null);
    const imageTextRef2 = useRef(null);
    const coordinatorRef = useRef(null);
    const researchRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const opacityValue = Math.min(scrollY / 400, 0.7);
        setOpacity(opacityValue);

        const fadeInElements = [
            { ref: introRef, threshold: 0.7 },
            { ref: imageTextRef1, threshold: 0.7 },
            { ref: imageTextRef2, threshold: 0.7 },
            { ref: coordinatorRef, threshold: 0.7 },
            { ref: researchRef, threshold: 0.7 },
        ];

        fadeInElements.forEach(({ ref, threshold }) => {
            if (ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                const elementVisible = elementTop - window.innerHeight < threshold;
                ref.current.classList.toggle("fade-in", elementVisible);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay" style={{ opacity }}></div>
                <img
                    src={require("../assets/fotos/jovenes-leyendo.png")}
                    alt="Jóvenes leyendo"
                    className="hero-image"
                    style={{ filter: `brightness(${1 - opacity * 0.6})` }}
                />
                <div className="hero-text">
                </div>
            </div>

            {/* Introduction */}
            <section className="container content-section" ref={introRef}>
                <h1 className="section-title">Grupo de Investigación sobre Niñez, Adolescencia y Juventud - CINAJ</h1>
                <p className="intro-text">
                El Grupo de Investigación sobre Niñez, Adolescencia y Juventud (CINAJ) fue creado el 
          <strong> 20 de enero de 2010 </strong> por Resolución de Rectorado UPS, con el objetivo de 
          producir conocimiento acerca de la compleja realidad de la que forman parte niños/as 
          y jóvenes a partir del reconocimiento de sus condiciones específicas en tanto sujetos 
          concretamente situados.
                </p>
            </section>

            {/* Image + Text Sections */}
            <section className="image-text-container" ref={imageTextRef1}>
                <img src={grupal1} alt="Investigadores CINAJ" className="image-large" />
                <div className="text-box">
                    <h2 className="section-subtitle">Objetivos</h2>
                    <p className="objetive-text">
                    Producir conocimientos para posibilitar, mediante la participación de instancias y organismos institucionales 
                    así como de diversas formas asociativas, el desarrollo de niños, niñas, adolescentes y jóvenes bajo los principios 
                    humanistas que orientan la misión de la UPS Ecuador y de los ejes contemplados en el Plan Nacional del Buen Vivir.
                    </p>         
                    <ul className="objective-list">
                      <li>Producir conocimientos acerca del conjunto de relaciones e interacciones que la niñez y la juventud desarrollan en sus prácticas frente a las pantallas, el ciberespacio y comunidades virtuales.</li>
                      <li>Producir conocimientos socialmente útiles sobre la compleja relación entre infancia y trabajo en el marco general de los cambios y transformaciones del mundo del trabajo y del mercado laboral a nivel global, regional, nacional y local.</li>
                      <li>Producir conocimientos acerca de la producción social de violencias estructurales y nuevas violencias situando como sujeto central de interés a niños, niñas, adolescentes y jóvenes.</li>
                      <li>Estudiar la producción social de violencias estructurales y nuevas violencias, enfocándose en niños, niñas, adolescentes y jóvenes.</li>
                      <li>Producir conocimientos sobre la relación entre jóvenes y política.</li>
                    </ul>
                </div>
            </section>

            <section className="image-text-container reverse" ref={imageTextRef2}>
                <img src={grupal2} alt="Equipo CINAJ" className="image-large" />
                <div className="text-box">
                    {/* Coordinator & Contact */}
                    <div className="coordinator-section" ref={coordinatorRef}>
                        <h2 className="section-subtitle">Coordinador</h2>
                        <p className="coordinator-name">Dr. Carlos Rene Unda, Ph.D.</p>

                        <h2 className="section-subtitle">Contacto</h2>
                        <p className="contact-email">
                            <a href="mailto:cunda@ups.edu.ec">cunda@ups.edu.ec</a>
                        </p>
                    </div>

                    {/* Research Areas */}
                    <div className="research-lines" ref={researchRef}>
                        <h2 className="section-subtitle">Líneas de Investigación</h2>
                        <ul className="research-list">
                            <li>Socialización y subjetividades infantil y juvenil</li>
                            <li>Participación social y política de niños y jóvenes</li>
                            <li>Desigualdades, ciudadanía e interculturalidad en perspectiva intergeneracional</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;