import React from 'react'
import ButtonHomeOne from './buttonHomeOne';
import InmuneOne from './inmuneOne';
import ResistenteOne from './resistenteOne';
import DevilidadOne from './devilidadOne';
import ResumenOne from './resumenOne';
import EspecificacionesOne from './especificacionesOne';
import TipoOne from './tipoOne';
import NameOne from './nameOne';
import PokeOne from './pokeOne';
import BotoneraOne from './botoneraOne';

export default function OnePokemon({ pokemon: { Nombre
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
        <div className='ml-6 mr-6'>

            <BotoneraOne />

            <PokeOne
                Imagen={Imagen}
                ImagenShiny={ImagenShiny}
            />

            <div className='flex flex-col justify-center mt-2'>

                <NameOne
                    Numero={Numero}
                    Nombre={Nombre}
                />

                <TipoOne
                    Tipo1={Tipo1}
                    Tipo2={Tipo2}
                    Tipo3={Tipo3}
                    Tipo4={Tipo4}
                    Tipo5={Tipo5}
                    Tipo6={Tipo6}
                />

                <EspecificacionesOne
                    Altura={Altura}
                    Peso={Peso}
                    Categoria={Categoria}
                    Habilidad1={Habilidad1}
                />

                <ResumenOne
                    MiniResumen={MiniResumen}
                />

                <DevilidadOne
                    Devilidad1={Devilidad1}
                    Devilidad2={Devilidad2}
                    Devilidad3={Devilidad3}
                    Devilidad4={Devilidad4}
                    Devilidad5={Devilidad5}
                    Devilidad6={Devilidad6}
                    Devilidad7={Devilidad7}
                />

                <ResistenteOne
                    Resistente1={Resistente1}
                    Resistente2={Resistente2}
                    Resistente3={Resistente3}
                    Resistente4={Resistente4}
                    Resistente5={Resistente5}
                    Resistente6={Resistente6}
                    Resistente7={Resistente7}
                />

                <InmuneOne
                    Inmune1={Inmune1}
                    Inmune2={Inmune2}
                    Inmune3={Inmune3}
                    Inmune4={Inmune4}
                    Inmune5={Inmune5}
                    Inmune6={Inmune6}
                    Inmune7={Inmune7}
                />

                <ButtonHomeOne />

            </div>

        </div>
    )
}
