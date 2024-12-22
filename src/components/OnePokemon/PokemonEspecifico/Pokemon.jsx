import React from 'react'

import Botonera from '../Botonera/Botonera';
import PokeIndividual from './Caracteristicas/PokeIndividual';
import Tipo from './Caracteristicas/Tipo';
import Especificaciones from './Caracteristicas/Especificaciones';
import Resumen from './Caracteristicas/Resumen';
import Devilidad from './Caracteristicas/Devilidad';
import Resistencia from './Caracteristicas/Resistencia';
import Inmune from './Caracteristicas/Inmune';
import ButtonHome from './ButtonHome';
import CadenaEvolutiva from './Caracteristicas/CadenaEvolutiva';

export default function Pokemon({ pokemon: { Nombre
    , Numero
    , Tipo1
    , Tipo2
    , Tipo3
    , Tipo4
    , Tipo5
    , Tipo6
    , Devilidad1
    , Devilidad2
    , Devilidad3
    , Devilidad4
    , Devilidad5
    , Devilidad6
    , Devilidad7
    , Resistente1
    , Resistente2
    , Resistente3
    , Resistente4
    , Resistente5
    , Resistente6
    , Resistente7
    , Inmune1
    , Inmune2
    , Inmune3
    , Inmune4
    , Inmune5
    , Inmune6
    , Inmune7
    , Imagen
    , ImagenShiny
    , ImagenModoPixel
    , Altura
    , Peso
    , Categoria
    , Habilidad1
    , Habilidad2
    , Habilidad3
    , HabilidadOculta1
    , HabilidadOculta2
    , PuntosBasePS
    , PuntosBaseAtaque
    , PuntosBaseDefensa
    , PuntosBaseAtaqueEspecial
    , PuntosBaseDefensaEspecial
    , PuntosBaseVelocidad
    , SexoMasculino
    , SexoFemenino
    , Evo1
    , Evo2
    , Evo3
    , Evo4
    , MegaEvolución1
    , MegaEvolución2
    , MiniResumen
    , Región
    , Generación } }) {

    return (
        <div className='ml-6 mr-6 dar '>

            <Botonera
                Numero={Numero} />

            <div className='lg:flex'>

                <PokeIndividual
                    Imagen={Imagen}
                    ImagenShiny={ImagenShiny}
                    Numero={Numero}
                    Nombre={Nombre}
                />

                <div className='flex flex-col justify-center mt-2'>


                    <Tipo
                        Tipo1={Tipo1}
                        Tipo2={Tipo2}
                        Tipo3={Tipo3}
                        Tipo4={Tipo4}
                        Tipo5={Tipo5}
                        Tipo6={Tipo6}
                    />

                    <Especificaciones
                        Altura={Altura}
                        Peso={Peso}
                        Categoria={Categoria}
                        Habilidad1={Habilidad1}
                        SexoMasculino={SexoMasculino}
                        SexoFemenino={SexoFemenino}
                    />

                    <Resumen
                        MiniResumen={MiniResumen}
                    />

                    <Devilidad
                        Devilidad1={Devilidad1}
                        Devilidad2={Devilidad2}
                        Devilidad3={Devilidad3}
                        Devilidad4={Devilidad4}
                        Devilidad5={Devilidad5}
                        Devilidad6={Devilidad6}
                        Devilidad7={Devilidad7}
                    />

                    <Resistencia
                        Resistente1={Resistente1}
                        Resistente2={Resistente2}
                        Resistente3={Resistente3}
                        Resistente4={Resistente4}
                        Resistente5={Resistente5}
                        Resistente6={Resistente6}
                        Resistente7={Resistente7}
                    />

                    <Inmune
                        Inmune1={Inmune1}
                        Inmune2={Inmune2}
                        Inmune3={Inmune3}
                        Inmune4={Inmune4}
                        Inmune5={Inmune5}
                        Inmune6={Inmune6}
                        Inmune7={Inmune7}
                    />

                    <CadenaEvolutiva
                        Evo1={Evo1}
                        Evo2={Evo2}
                        Evo3={Evo3}
                        Evo4={Evo4}
                    />

                    <ButtonHome />

                </div>

            </div>



        </div>
    )
}
