import React, {useState} from "react"
import Cuma from "../assets/img-la-pizza/cuma.png"
import Banana from "../assets/img-la-pizza/banana.png"
import Menta from "../assets/img-la-pizza/menta.png"
import Toca from "../assets/img-la-pizza/toca.png"
import Prato from "../assets/img-la-pizza/prato.png"
import Carrinho from '../assets/img-la-pizza/carrinho.png'

function Main() {

    const [quantidade, setQuantidade] = useState(0);
    const [pizza, setPizza] = useState("Carrinho vazio");
    const [preco, setPreco] = useState("")
    const [pizzaImagem, setPizzaImagem] = useState();

    function somar() {
        setQuantidade(quantidade + 1)
    }

    const pizzaCuma = () => {
        setPizza("La Cuma")
        setPizzaImagem(Cuma)
        setPreco("R$23")
    }

    const pizzaMenta = () => {
        setPizza("La Menta")
        setPizzaImagem(Menta)
        setPreco("R$23")
    }

    const pizzaBanana = () => {
        setPizza("La Bana")
        setPizzaImagem(Banana)
        setPreco("R$23")
    }

    const pizzaToca = () => {
        setPizza("La Toca")
        setPizzaImagem(Toca)
        setPreco("R$23")
    }

    return (
        <>
            <main>
                <section className="banner">
                    <h1>La P<span id="i-yellow">i</span><span id="z-red">z</span><span id="z-green">z</span>a</h1>
                </section>  
                <section className="box2">
                    <h2>Mais vendidas</h2>
                    <section className="content-card">
                        <div className="card">
                            <img className="img-card" src={Cuma} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Cuma</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {pizzaCuma(); somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Menta} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Menta</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {pizzaMenta(); somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Banana} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Bana</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {pizzaBanana(), somar()}}>Comprar agora</button>
                        </div>
                        <div className="card">
                            <img className="img-card" src={Toca} alt="" />
                            <div className="descricao-pizza">
                                <h3>La Toca</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <h3>R$23</h3>
                            </div>
                            <button className="button-card" onClick={() => {pizzaToca(); somar()}}>Comprar agora</button>
                        </div>
                    </section>
                </section>
                <section className="box3">
                    <section className="content-box3">
                        <section className="mesas">
                            <img id="prato" src={Prato} alt="" />
                        </section>
                        <section className="descricao-restaurante">
                            <h2>La P<span id="i-yellow">i</span><span id="z-red">z</span><span id="z-green">z</span>a</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum.</p>
                            <button>Ler mais</button>
                        </section>
                    </section>
                </section>
                <section className="compras">
                    <div className="title">
                        <img id="carrinho" src={Carrinho} alt="" />
                        <p>Itens no carrinho ({quantidade})</p>
                    </div>
                    <section className="itens">
                        <div>
                            <h3>{pizza}</h3>
                            <h4>{preco}</h4>
                        </div>
                        <img src={pizzaImagem} alt="" />
                    </section>
                    <button>Comprar</button>
                </section>
            </main>
        </>
    )
}
export default Main